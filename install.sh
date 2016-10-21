#!/bin/sh

########################################################################################
##                                                                                    ##
##                              __________/\__________                                ##
##                                 ----- //\\ -----                                   ##
##                                                                                    ##
##                         Airship Launcher Installer Script                          ##
##                                                                                    ##
##                                                                                    ##
##------------------------------------------------------------------------------------##
##                                                                                    ##
##    METHOD 1: QUICK INSTALL (tl;dr)                                                 ##
##    Skim through this script & let it install for you.                              ##
##                                                                                    ##
##    Pipe to shell                                                                   ##
##    /bin/sh -c "$(curl -fsS https://install.airshipcms.io)"                         ##
##                                                                                    ##
##    Note: `rm` commands are wrapped for protection when piping directly to shell    ##
##                                                                                    ##
##------------------------------------------------------------------------------------##
##                                                                                    ##
##    or                                                                              ##
##                                                                                    ##
##    METHOD 2: DOWNLOAD AND RUN IT                                                   ##
##    curl -o install.sh https://install.airshipcms.io && sh ./install.sh             ##
##                                                                                    ##
##------------------------------------------------------------------------------------##
##                                                                                    ##
##    or                                                                              ##
##                                                                                    ##
##    METHOD 3: MANUAL INSTALL (if you are really pessimistic)                        ##
##                                                                                    ##
##    Perform the following steps manually.                                           ##
##    Supported $PLATFORM are:                                                        ##
##    - Mac64                                                                         ##
##    - Linux64                                                                       ##
##                                                                                    ##
##  1.Check the latest version of the Airship Launcher from                           ##
##    https://install.airshipcms.io/$PLATFORM/LATEST                                  ##
##                                                                                    ##
##  2.Download the compressed binaries to a temporary directory from                  ##
##    https://install.airshipcms.io/$PLATFORM/airship-$LATEST.tar.bz2                 ##
##    or                                                                              ##
##    https://install.airshipcms.io/$PLATFORM/airship-$LATEST.tar.gz                  ##
##                                                                                    ##
##  3.Create the target directory                                                     ##
##    $HOME/.airship-bin                                                              ##
##                                                                                    ##
##  4.Extract the archive from the temporary directory to                             ##
##    $HOME/.airship-bin/airship                                                      ##
##    $HOME/.airship-bin/airship-server                                               ##
##                                                                                    ##
##  5.Add Airship Launcher binaries to your $PATH                                     ##
##                                                                                    ##
##    ----------------                                                                ##
##                                                                                    ##
##    Create symlinks to the binaries:                                                ##
##                                                                                    ##
##    sudo ln -s $HOME/.airship-bin/airship /usr/local/bin/airship                    ##
##    sudo ln -s $HOME/.airship-bin/airship-server /usr/local/bin/airship-server      ##
##                                                                                    ##
##    ----------------                                                                ##
##                                                                                    ##
##    or Update your shell startup script. Aadd $HOME/.airship-bin to $PATH           ##
##    (example, for /bin/bash):                                                       ##
##                                                                                    ##
##    echo "PATH=$PATH:$HOME/.airship-bin" >> ~/.bash_profile                         ##
##    source ~/.bash_profile                                                          ##
##                                                                                    ##
##    ----------------                                                                ##
##                                                                                    ##
##  6.Test that `airship` and `airship-server` are executable                         ##
##                                                                                    ##
##                                                                                    ##
########################################################################################
















# platform detection

machine=`uname -m`
os=`uname -s`

if test -f "/etc/lsb-release" && grep -q DISTRIB_ID /etc/lsb-release && ! grep -q wrlinux /etc/lsb-release; then
  platform=`grep DISTRIB_ID /etc/lsb-release | cut -d "=" -f 2 | tr '[A-Z]' '[a-z]'`
  platform_version=`grep DISTRIB_RELEASE /etc/lsb-release | cut -d "=" -f 2`
elif test -f "/etc/debian_version"; then
  platform="debian"
  platform_version=`cat /etc/debian_version`
elif test -f "/etc/redhat-release"; then
  platform=`sed 's/^\(.\+\) release.*/\1/' /etc/redhat-release | tr '[A-Z]' '[a-z]'`
  platform_version=`sed 's/^.\+ release \([.0-9]\+\).*/\1/' /etc/redhat-release`

  # If /etc/redhat-release exists, we act like RHEL by default
  if test "$platform" = "fedora"; then
    # FIXME: stop remapping fedora to el
    # FIXME: remove client side platform_version mangling and hard coded yolo
    # Change platform version for use below.
    platform_version="6.0"
  fi

  if test "$platform" = "xenserver"; then
    # Current XenServer 6.2 is based on CentOS 5, platform is not reset to "el" server should hanlde response
    platform="xenserver"
  else
    # FIXME: use "redhat"
    platform="el"
  fi

elif test -f "/etc/system-release"; then
  platform=`sed 's/^\(.\+\) release.\+/\1/' /etc/system-release | tr '[A-Z]' '[a-z]'`
  platform_version=`sed 's/^.\+ release \([.0-9]\+\).*/\1/' /etc/system-release | tr '[A-Z]' '[a-z]'`
  # amazon is built off of fedora, so act like RHEL
  if test "$platform" = "amazon linux ami"; then
    # FIXME: remove client side platform_version mangling and hard coded yolo, and remapping to deprecated "el"
    platform="el"
    platform_version="6.0"
  fi
# Apple OS X
elif test -f "/usr/bin/sw_vers"; then
  platform="mac_os_x"
  # Matching the tab-space with sed is error-prone
  platform_version=`sw_vers | awk '/^ProductVersion:/ { print $2 }' | cut -d. -f1,2`

  # x86_64 Apple hardware often runs 32-bit kernels (see OHAI-63)
  x86_64=`sysctl -n hw.optional.x86_64`
  if test $x86_64 -eq 1; then
    machine="x86_64"
  fi
elif test -f "/etc/release"; then
  machine=`/usr/bin/uname -p`
  if grep -q SmartOS /etc/release; then
    platform="smartos"
    platform_version=`grep ^Image /etc/product | awk '{ print $3 }'`
  else
    platform="solaris2"
    platform_version=`/usr/bin/uname -r`
  fi
elif test -f "/etc/SuSE-release"; then
  if grep -q 'Enterprise' /etc/SuSE-release;
  then
      platform="sles"
      platform_version=`awk '/^VERSION/ {V = $3}; /^PATCHLEVEL/ {P = $3}; END {print V "." P}' /etc/SuSE-release`
  else
      platform="suse"
      platform_version=`awk '/^VERSION =/ { print $3 }' /etc/SuSE-release`
  fi
elif test "x$os" = "xFreeBSD"; then
  platform="freebsd"
  platform_version=`uname -r | sed 's/-.*//'`
elif test "x$os" = "xAIX"; then
  platform="aix"
  platform_version="`uname -v`.`uname -r`"
  machine="powerpc"
elif test -f "/etc/os-release"; then
  . /etc/os-release
  if test "x$CISCO_RELEASE_INFO" != "x"; then
    . $CISCO_RELEASE_INFO
  fi

  platform=$ID
  platform_version=$VERSION
fi

if test "x$platform" = "x"; then
  echo "Unable to determine platform version!"
  report_bug
  exit 1
fi


major_version=`echo $platform_version | cut -d. -f1`
case $platform in
  # FIXME: should remove this case statement completely
  "el")
    # FIXME:  "el" is deprecated, should use "redhat"
    platform_version=$major_version
    ;;
  "debian")
    if test "x$major_version" = "x5"; then
      # This is here for potential back-compat.
      # We do not have 5 in versions we publish for anymore but we
      # might have it for earlier versions.
      platform_version="6"
    else
      platform_version=$major_version
    fi
    ;;
  "freebsd")
    platform_version=$major_version
    ;;
  "sles")
    platform_version=$major_version
    ;;
  "suse")
    platform_version=$major_version
    ;;
esac

# normalize os for Mac
if test "$os" = "Darwin"; then
  os="Mac"
fi

# normalize the architecture we detected
case $machine in
  "x86_64"|"amd64"|"x64")
    machine="64"
    ;;
  "i386"|"i86pc"|"x86"|"i686")
    machine=""
    ;;
  "sparc"|"sun4u"|"sun4v")
    machine="sparc"
    ;;
esac

if test "x$platform_version" = "x"; then
  echo "Unable to determine platform version!"
  report_bug
  exit 1
fi

if test "x$platform" = "xsolaris2"; then
  # hack up the path on Solaris to find wget, pkgadd
  PATH=/usr/sfw/bin:/usr/sbin:$PATH
  export PATH
fi

# end of platform detection

# Check whether a command exists - returns 0 if it does, 1 if it does not
exists() {
  if command -v $1 >/dev/null 2>&1
  then
    return 0
  else
    return 1
  fi
}
# decompressor detection

decompressor="none"

if exists bzip2; then
  decompressor="bz2"
elif exists gzip; then
  decompressor="gz"
fi

if test "$decompressor" = "none"; then
  echo "Unable to find a suitable decompressor"
  echo "You must have bzip2 or gzip installed"
  exit 1
fi

# end of decompressor detection


http_404_error() {
  echo "Airship Launcher does not yet support platform $platform"
  echo ""
  if test "x$download_url" != "x"; then
    echo "Download URL: $download_url"
  fi
  if test "x$stderr_results" != "x"; then
    echo "\nDEBUG OUTPUT FOLLOWS:\n$stderr_results"
  fi
  exit 1
}

capture_tmp_stderr() {
  # spool up /tmp/stderr from all the commands we called
  if test -f "$tmp_dir/stderr"; then
    output=`cat $tmp_dir/stderr`
    stderr_results="${stderr_results}\nSTDERR from $1:\n\n$output\n"
    rm $tmp_dir/stderr
  fi
}

# do_wget URL FILENAME
do_wget() {
  wget --header="Accept-Encoding:gzip, deflate, sdch, br" -O "$2" "$1" 2>$tmp_dir/stderr
  rc=$?
  # check for 404
  grep "ERROR 404" $tmp_dir/stderr 2>&1 >/dev/null
  if test $? -eq 0; then
    echo "ERROR 404"
    http_404_error
  fi

  # check for bad return status or empty output
  if test $rc -ne 0 || test ! -s "$2"; then
    capture_tmp_stderr "wget"
    return 1
  fi

  return 0
}

# do_curl URL FILENAME
do_curl() {
  curl --retry 5 -sL -H "Accept-Encoding:gzip, deflate, sdch, br" -D "$tmp_dir/stderr" "$1" > "$2"
  rc=$?
  # check for 404
  grep "404 Not Found" "$tmp_dir/stderr" 2>&1 >/dev/null
  if test $? -eq 0; then
    echo "ERROR 404"
    http_404_error
  fi

  # check for bad return status or empty output
  if test $rc -ne 0 || test ! -s "$2"; then
    capture_tmp_stderr "curl"
    return 1
  fi

  return 0
}

# do_fetch URL FILENAME
do_fetch() {
  fetch -o "$2" "$1" 2>$tmp_dir/stderr
  # check for bad return status
  test $? -ne 0 && return 1
  return 0
}

# do_perl URL FILENAME
do_perl() {
  perl -e 'use LWP::Simple; getprint($ARGV[0]);' "$1" > "$2" 2>$tmp_dir/stderr
  rc=$?
  # check for 404
  grep "404 Not Found" $tmp_dir/stderr 2>&1 >/dev/null
  if test $? -eq 0; then
    echo "ERROR 404"
    http_404_error
  fi

  # check for bad return status or empty output
  if test $rc -ne 0 || test ! -s "$2"; then
    capture_tmp_stderr "perl"
    return 1
  fi

  return 0
}

# do_python URL FILENAME
do_python() {
  python -c "import sys,urllib2 ; sys.stdout.write(urllib2.urlopen(sys.argv[1]).read())" "$1" > "$2" 2>$tmp_dir/stderr
  rc=$?
  # check for 404
  grep "HTTP Error 404" $tmp_dir/stderr 2>&1 >/dev/null
  if test $? -eq 0; then
    echo "ERROR 404"
    http_404_error
  fi

  # check for bad return status or empty output
  if test $rc -ne 0 || test ! -s "$2"; then
    capture_tmp_stderr "python"
    return 1
  fi
  return 0
}

unable_to_retrieve_binary() {
  echo "Unable to retrieve Airship Launcher binary"
  if test "x$download_url" != "x"; then
    echo "Download URL: $download_url"
  fi
  if test "x$stderr_results" != "x"; then
    echo "\nDEBUG OUTPUT FOLLOWS:\n$stderr_results"
  fi
  exit 1
}

# do_download URL FILENAME
do_download() {
  if test "$3" != "1"; then
    echo ""
    echo "Downloading $1"
    echo "To $2"
  fi

  url=`echo $1`
  if test "x$platform" = "xsolaris2"; then
    if test "x$platform_version" = "x5.9" -o "x$platform_version" = "x5.10"; then
      # solaris 9 lacks openssl, solaris 10 lacks recent enough credentials - your base O/S is completely insecure, please upgrade
      url=`echo $url | sed -e 's/https/http/'`
    fi
  fi

  # we try all of these until we get success.
  # perl, in particular may be present but LWP::Simple may not be installed

  if exists curl; then
    do_curl $url $2 && return 0
  fi

  if exists wget; then
    do_wget $url $2 && return 0
  fi

  if exists fetch; then
    do_fetch $url $2 && return 0
  fi

  if exists perl; then
    do_perl $url $2 && return 0
  fi

  if exists python; then
    do_python $url $2 && return 0
  fi

  unable_to_retrieve_binary
}

# do_unpack FILENAME DESTINATION
do_unpack() {

  archive_path=`echo $1`
  dest=`echo $2`

  if test "$decompressor" = "bz2"; then
    tar -xj -C "$dest" -f "$archive_path"
  elif test "$decompressor" = "gz"; then
    tar -xz -C "$dest" -f "$archive_path"
  fi

}

if test "x$TMPDIR" = "x"; then
  tmp="/tmp"
else
  tmp=$TMPDIR
fi
# secure-ish temp dir creation without having mktemp available (DDoS-able but not expliotable)
tmp_dir="$tmp/AirshipLauncher.$$"
(umask 077 && mkdir $tmp_dir) || exit 1

osarch=$os$machine

echo "Starting Airship Launcher installation for $platform $osarch \n"

platform_url="https://install.airshipcms.io/$osarch"
cli_version_filename="$tmp_dir/cli-version"
cli_version_url="$platform_url/LATEST"

do_download "$cli_version_url" "$cli_version_filename" 1
cli_latest_version=`cat $cli_version_filename`

echo "Will install version $cli_latest_version"

cli_filename="airship-${cli_latest_version}.tar.${decompressor}"
cli_download_url="$platform_url/$cli_filename"

# ensure the parent directory where to install the binaries exist
bin_path="$HOME/.airship-bin"
(umask 077 && mkdir -p $bin_path) || exit 1

do_download "$cli_download_url"  "$tmp_dir/$cli_filename"

# unpack
do_unpack "$tmp_dir/$cli_filename" "$bin_path"

# check if /usr/local/bin is writeable, then link
if ! echo ":$PATH:" | grep -q ":$bin_path:"; then
  local_bin_path=/usr/local/bin
  if [ -w $local_bin_path ]; then
    ln -sf $bin_path/airship $local_bin_path/airship
    echo "Created symlink $bin_path/airship to $local_bin_path/airship"
    ln -sf $bin_path/airship-server $local_bin_path/airship-server
    echo "Created symlink $bin_path/airship-server to $local_bin_path/airship-server \n"
  fi
fi

final_instructions="Take to the skies! by using the \`airship\` command"

if ! [ -x "`command -v airship`" ] || ! [ -x "`command -v airship-server`" ]; then
  # attempt to automate adding binaries to $PATH
  # add $bin_path to $PATH if not set
  add_path='\n# Airship Launcher path\nexport PATH="$PATH:$HOME/.airship-bin"'
  path_added=false

  add_source_message () {
    echo "Added ~/.airship-bin to \$PATH in $1"
    export PATH=$PATH:$HOME/.airship-bin
    final_instructions="Remember to \`source $1\`  to use Airship Launcher!"
    path_added=true
  }

  # check if ~/.tcshrc exists
  if ! $path_added && ! echo ":$PATH:" | grep -q ":$bin_path:"; then
    if [ -w ~/.tcshrc ]; then
      echo $add_path >> ~/.tcshrc
      add_source_message '~/.tcshrc'
    fi
  fi

  # check if ~/.cshrc exists
  if ! $path_added && ! echo ":$PATH:" | grep -q ":$bin_path:"; then
    if [ -w ~/.cshrc ]; then
      echo $add_path >> ~/.cshrc
      add_source_message '~/.cshrc'
    fi
  fi

  # check if ~/.zprofie exists, else ~/.zshrc
  if ! $path_added && ! echo ":$PATH:" | grep -q ":$bin_path:"; then
    if [ -w ~/.zprofile ]; then
      echo $add_path >> ~/.zprofile
      add_source_message '~/.zprofile'
    elif [ -w ~/.zshrc ]; then
      echo $add_path >> ~/.zshrc
      add_source_message '~/.zshrc'
    fi
  fi

  # check if ~/.bash_profile exists, else ~/.bashrc
  if ! $path_added && ! echo ":$PATH:" | grep -q ":$bin_path:"; then
    if [ -w ~/.bash_profile ]; then
      echo $add_path >> ~/.bash_profile
      add_source_message '~/.bash_profile'
    elif [ -w ~/.bash_profile ]; then
      echo $add_path >> ~/.bashrc
      add_source_message '~/.bashrc'
    fi
  fi

  # check if ~/.profile exists
  if ! $path_added && ! echo ":$PATH:" | grep -q ":$bin_path:"; then
    if [ -w ~/.profile ]; then
      echo $add_path >> ~/.profile
      add_source_message '~/.profile'
    fi
  fi

fi # adding path to profile

# check installation
if [ -x "`command -v airship`" ] && [ -x "`command -v airship-server`" ]; then

  # clean up
  # wrap in parens to protect against network accidents
  (rm -r "$tmp_dir")

  echo "Airship Launcher `airship version` has been successfully installed"
  echo $final_instructions

else
  echo "**** AUTO INSTALL FAILED ****"
  echo "Please add the following line to your shell profile config (example: ~/.bash_profile)"
  echo ""
  echo 'export PATH="$PATH:$HOME/.airship-bin"'
  echo ""
fi
