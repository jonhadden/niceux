<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '.~EU-t#l C7-^Q36HR$QCMT-)?DFxrt@4 U!P)K+?ty:,HBoM+<;haaJfGb5 4Ce');
define('SECURE_AUTH_KEY',  'G6_o`I}NHRQ<7@~(Jtg4XH;W2P<){XK587iIcCHVGQ5T4FB!7b!YZ+0iQC<zr~L,');
define('LOGGED_IN_KEY',    '_fE@hF4-z{7SV!.WBfg-M1zlvA~&mh8$[n+$Go4YUMfD@4(8N}&ZyY:x}Lam}h@(');
define('NONCE_KEY',        'R`+lov(?T#&xQZlUhe.tJ5b}Hmuz/~V%`kPaW uO;v#<R,U6|VbD70e4MIr>]t0r');
define('AUTH_SALT',        'f()a?c|WKtvjDrk?.c>umE@4n6FUYzGXXolG:ciQ+ vj1e~5;Z/W{y_&iw^f*H?a');
define('SECURE_AUTH_SALT', '<(#pJ+yl<QkMs-@=FV@,ZcV`iAebGHa9bgys{vOd:_W1d?zVb_v.J(-3&ews)>WU');
define('LOGGED_IN_SALT',   ',/<h,iD1Hsa&E.j_A-xB.pDGzr*9_G@vP?/2 am.A=.*xxm*%sF((?uEdD2wftb7');
define('NONCE_SALT',       '.rn~7Jz~qj=RRp%I):S(]M[ll?FPgc6OHk@ohs4*@,yCYiv%|wh%I4UZKP+uC6IP');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
