{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red194\green11\blue35;\red255\green255\blue255;\red24\green24\blue24;
\red10\green58\blue158;\red0\green0\blue0;\red109\green51\blue215;\red11\green34\blue86;\red24\green26\blue30;
\red157\green0\blue210;}
{\*\expandedcolortbl;;\cssrgb\c81176\c13333\c18039;\cssrgb\c100000\c100000\c100000;\cssrgb\c12549\c12549\c12549;
\cssrgb\c1961\c31373\c68235;\cssrgb\c0\c0\c0;\cssrgb\c50980\c31373\c87451;\cssrgb\c3922\c18824\c41176;\cssrgb\c12157\c13725\c15686;
\cssrgb\c68627\c0\c85882;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 menuBtn\cf4 \strokec4  \strokec6 =\strokec4  \cf5 \strokec5 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf8 \strokec8 'menu-btn'\cf4 \strokec4 );\cb1 \
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 menuContainer\cf4 \strokec4  \strokec6 =\strokec4  \cf5 \strokec5 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf8 \strokec8 'menu-container'\cf4 \strokec4 );\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 menuBtn\cf4 \strokec4 .\cf7 \strokec7 addEventListener\cf4 \strokec4 (\cf8 \strokec8 'click'\cf4 \strokec4 , \cf2 \strokec2 function\cf4 \strokec4 () \cf9 \strokec9 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf9 \cb3 \strokec9     \cf5 \strokec5 menuContainer\cf9 \strokec9 .\cf5 \strokec5 classList\cf9 \strokec9 .\cf7 \strokec7 toggle\cf9 \strokec9 (\cf8 \strokec8 'open'\cf9 \strokec9 );\cf4 \cb1 \strokec4 \
\
\cf9 \cb3 \strokec9     \cf10 \strokec10 if\cf9 \strokec9  (\cf5 \strokec5 menuContainer\cf9 \strokec9 .\cf5 \strokec5 classList\cf9 \strokec9 .\cf7 \strokec7 contains\cf9 \strokec9 (\cf8 \strokec8 'open'\cf9 \strokec9 )) \{\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9         \cf5 \strokec5 menuBtn\cf9 \strokec9 .\cf5 \strokec5 textContent\cf9 \strokec9  \cf4 \strokec6 =\cf9 \strokec9  \cf8 \strokec8 '\uc0\u10005 '\cf9 \strokec9 ;\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9     \} \cf10 \strokec10 else\cf9 \strokec9  \{\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9         \cf5 \strokec5 menuBtn\cf9 \strokec9 .\cf5 \strokec5 textContent\cf9 \strokec9  \cf4 \strokec6 =\cf9 \strokec9  \cf8 \strokec8 '\uc0\u9776 '\cf9 \strokec9 ;\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9     \}\cf4 \cb1 \strokec4 \
\cf9 \cb3 \strokec9 \}\cf4 \strokec4 );\cb1 \
}