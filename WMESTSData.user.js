// ==UserScript==
// @name         WMESTSData
// @namespace    https://gitlab.com/WMEScripts
// @version      2020.06.14.01
// @description  Datas for the script WME-send-to-slack
// @author       Tunisiano18
// @match        https://www.waze.com*/user/*editor/*
// @grant        none
// ==/UserScript==

var _0x475d=["\x41\x66\x67\x68\x61\x6E\x69\x73\x74\x61\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6F\x6B\x73\x2E\x73\x6C\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x65\x72\x76\x69\x63\x65\x73\x2F\x54\x30\x56\x4C\x35\x31\x31\x55\x33\x2F\x42\x51\x36\x53\x57\x44\x38\x4E\x54\x2F\x30\x49\x65\x69\x54\x6E\x6E\x50\x72\x6E\x66\x64\x6D\x6D\x5A\x52\x48\x61\x7A\x31\x46\x78\x70\x34","\x42\x61\x6E\x67\x6C\x61\x64\x65\x73\x68","\x42\x68\x75\x74\x61\x6E","\x42\x65\x6C\x67\x69\x75\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6F\x6B\x73\x2E\x73\x6C\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x65\x72\x76\x69\x63\x65\x73\x2F\x54\x43\x4B\x51\x43\x4D\x39\x51\x53\x2F\x42\x44\x51\x53\x42\x46\x48\x45\x30\x2F\x5A\x68\x7A\x69\x79\x61\x36\x71\x71\x4B\x32\x68\x52\x70\x35\x62\x45\x77\x4C\x70\x59\x63\x50\x4B","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x66\x6F\x72\x6D\x73\x2F\x64\x2F\x65\x2F\x31\x46\x41\x49\x70\x51\x4C\x53\x66\x75\x77\x54\x54\x73\x42\x65\x4E\x38\x74\x70\x71\x49\x53\x50\x6B\x71\x44\x67\x76\x70\x45\x4C\x65\x76\x43\x4D\x57\x54\x43\x47\x4B\x53\x66\x34\x36\x70\x72\x65\x41\x57\x2D\x79\x37\x42\x6E\x67\x2F\x66\x6F\x72\x6D\x52\x65\x73\x70\x6F\x6E\x73\x65","\x43\x68\x69\x6E\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6F\x6B\x73\x2E\x73\x6C\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x65\x72\x76\x69\x63\x65\x73\x2F\x54\x30\x31\x32\x55\x43\x5A\x54\x37\x45\x55\x2F\x42\x30\x31\x32\x39\x30\x4B\x43\x53\x43\x41\x2F\x6F\x79\x61\x48\x34\x4E\x43\x4F\x6D\x6F\x4F\x37\x4F\x76\x56\x43\x63\x50\x39\x71\x6E\x51\x39\x71","\x43\x6F\x6C\x6F\x6D\x62\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6F\x6B\x73\x2E\x73\x6C\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x65\x72\x76\x69\x63\x65\x73\x2F\x54\x30\x56\x48\x36\x32\x44\x52\x52\x2F\x42\x51\x58\x32\x59\x31\x44\x54\x51\x2F\x6D\x62\x47\x4B\x41\x4E\x71\x7A\x54\x66\x32\x64\x53\x48\x35\x7A\x7A\x71\x4D\x7A\x59\x5A\x33\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x34\x37\x35\x38\x37\x34\x38\x30\x31\x39\x34\x39\x30\x38\x31\x37\x30\x2F\x62\x32\x4C\x45\x58\x31\x5A\x56\x37\x48\x47\x48\x43\x53\x77\x44\x4D\x44\x4C\x55\x58\x77\x63\x64\x58\x48\x33\x79\x79\x61\x51\x62\x79\x4D\x49\x66\x50\x66\x74\x77\x4D\x77\x45\x5A\x45\x55\x75\x32\x75\x68\x4D\x43\x41\x38\x71\x47\x52\x74\x7A\x78\x31\x64\x77\x45\x43\x74\x64\x30\x2F\x73\x6C\x61\x63\x6B","\x46\x72\x61\x6E\x63\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x37\x31\x37\x39\x33\x36\x36\x32\x31\x32\x38\x31\x36\x30\x37\x36\x39\x2F\x50\x39\x39\x41\x63\x56\x64\x64\x75\x32\x50\x30\x77\x30\x4A\x6D\x65\x53\x43\x39\x62\x54\x65\x61\x56\x61\x52\x30\x63\x6E\x45\x69\x73\x54\x58\x65\x71\x48\x32\x33\x5A\x72\x4A\x47\x59\x37\x6F\x34\x45\x42\x56\x53\x41\x65\x62\x71\x4D\x69\x64\x48\x30\x49\x6E\x30\x62\x73\x62\x33\x2F\x73\x6C\x61\x63\x6B","\x47\x65\x72\x6D\x61\x6E\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6F\x6B\x73\x2E\x73\x6C\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x65\x72\x76\x69\x63\x65\x73\x2F\x54\x4E\x4E\x42\x41\x38\x45\x35\x36\x2F\x42\x30\x31\x34\x58\x36\x34\x45\x50\x45\x43\x2F\x75\x67\x66\x47\x75\x56\x75\x4A\x6E\x32\x6D\x52\x6D\x65\x62\x33\x58\x4D\x30\x4E\x6D\x75\x65\x32","\x49\x6E\x64\x6F\x6E\x65\x73\x69\x61","\x49\x6E\x64\x69\x61","\x4C\x75\x78\x65\x6D\x62\x6F\x75\x72\x67","\x4D\x6F\x6E\x67\x6F\x6C\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x37\x30\x32\x32\x38\x37\x33\x34\x37\x30\x31\x33\x37\x37\x39\x34\x38\x36\x2F\x47\x6E\x78\x64\x42\x52\x78\x45\x71\x6A\x50\x70\x32\x6E\x4A\x46\x67\x38\x66\x31\x69\x5F\x4E\x6C\x36\x50\x5F\x72\x69\x59\x4C\x64\x66\x54\x65\x37\x46\x39\x33\x4C\x62\x6B\x34\x59\x6E\x34\x4D\x75\x44\x43\x55\x5A\x65\x70\x4C\x6E\x46\x5F\x77\x70\x54\x6D\x77\x5F\x30\x75\x6B\x69\x2F\x73\x6C\x61\x63\x6B","\x4D\x61\x6C\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6F\x6B\x73\x2E\x73\x6C\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x65\x72\x76\x69\x63\x65\x73\x2F\x54\x30\x42\x4D\x50\x47\x4A\x34\x41\x2F\x42\x51\x4B\x39\x48\x47\x53\x53\x30\x2F\x47\x7A\x6C\x64\x6A\x6D\x4C\x58\x66\x52\x71\x39\x79\x4A\x4A\x64\x42\x65\x66\x37\x4F\x46\x66\x49","\x4E\x61\x6D\x69\x62\x69\x61","\x4E\x65\x74\x68\x65\x72\x6C\x61\x6E\x64\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6F\x6B\x73\x2E\x73\x6C\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x65\x72\x76\x69\x63\x65\x73\x2F\x54\x30\x33\x37\x41\x54\x32\x4B\x4E\x2F\x42\x4A\x4E\x38\x32\x53\x44\x35\x33\x2F\x52\x75\x48\x39\x47\x53\x68\x4D\x55\x37\x5A\x4F\x61\x43\x67\x4B\x6E\x66\x4E\x53\x4F\x45\x35\x45","\x4E\x6F\x72\x77\x61\x79","\x50\x61\x6B\x69\x73\x74\x61\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6F\x6B\x73\x2E\x73\x6C\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x65\x72\x76\x69\x63\x65\x73\x2F\x54\x34\x57\x4C\x46\x4E\x4C\x50\x52\x2F\x42\x30\x31\x34\x4B\x33\x37\x39\x58\x56\x31\x2F\x54\x43\x6A\x7A\x77\x46\x6D\x75\x57\x77\x75\x6E\x36\x65\x48\x6D\x78\x41\x36\x75\x54\x51\x56\x53","\x50\x6F\x6C\x61\x6E\x64\x20\x28\x74\x65\x73\x74\x20\x73\x65\x72\x76\x65\x72\x29","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6F\x6B\x73\x2E\x73\x6C\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x65\x72\x76\x69\x63\x65\x73\x2F\x54\x36\x5A\x37\x54\x42\x39\x4B\x34\x2F\x42\x30\x31\x34\x34\x4B\x31\x4E\x31\x4E\x4B\x2F\x71\x34\x70\x70\x53\x56\x45\x37\x41\x6B\x6D\x64\x44\x69\x58\x4D\x44\x34\x39\x6F\x6E\x4B\x68\x57","\x53\x72\x69\x20\x4C\x61\x6E\x6B\x61","\x53\x6F\x75\x74\x68\x20\x41\x66\x72\x69\x63\x61","\x55\x53\x41","\x44\x65\x76\x28\x44\x6F\x20\x6E\x6F\x74\x20\x75\x73\x65\x29","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6F\x6B\x73\x2E\x73\x6C\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x65\x72\x76\x69\x63\x65\x73\x2F\x54\x42\x34\x47\x41\x4A\x39\x4D\x31\x2F\x42\x42\x52\x54\x4D\x52\x4A\x48\x34\x2F\x69\x72\x38\x42\x71\x6B\x37\x44\x49\x73\x48\x74\x43\x64\x70\x72\x70\x68\x4F\x76\x4A\x7A\x4F\x75","\x44\x65\x66\x61\x75\x6C\x74\x28\x42\x65\x29","\x41\x6C\x61\x62\x61\x6D\x61\x2C\x20\x46\x6C\x6F\x72\x69\x64\x61\x20\x61\x6E\x64\x20\x47\x65\x6F\x72\x67\x69\x61","\x44\x65\x6C\x61\x77\x61\x72\x65","\x4C\x6F\x75\x69\x73\x69\x61\x6E\x61","\x4E\x65\x77\x20\x4A\x65\x72\x73\x65\x79","\x4E\x65\x77\x20\x59\x6F\x72\x6B","\x50\x65\x6E\x6E\x73\x79\x6C\x76\x61\x6E\x69\x61","\x46\x72\x61\x6E\xE7\x61\x69\x73","\x4E\x65\x64\x65\x72\x6C\x61\x6E\x64\x73","\x45\x6E\x67\x6C\x69\x73\x68","\x61\x66\x67\x68\x61\x6E\x69\x73\x74\x61\x6E","\x62\x61\x6E\x67\x6C\x61\x64\x65\x73\x68","\x62\x68\x75\x74\x61\x6E","\x32\x39\x2D\x66\x72\x5F\x64\x65\x6D\x61\x6E\x64\x65\x73\x5F\x77\x6D\x65","\x32\x39\x2D\x76\x6C\x5F\x72\x65\x71\x75\x65\x73\x74\x73\x2D\x77\x6D\x65","\x75\x6E\x6C\x6F\x63\x6B\x73\x2D\x61\x6E\x64\x2D\x6C\x6F\x63\x6B\x73","\x64\x65\x73\x62\x6C\x6F\x71\x75\x65\x6F\x73","\x63\x69\x65\x72\x72\x65\x73\x5F\x76\x69\x61\x6C\x65\x73\x5F\x77\x6D\x65","\x2D\x65\x64\x69\x74\x69\x6E\x67","\x2D\x63\x6C\x6F\x73\x75\x72\x65\x73","\x2D\x31\x30\x30\x31\x32\x31\x33\x38\x37\x37\x33\x35\x31","\x77\x6D\x65\x2D\x63\x68\x61\x74","\x73\x74\x72\x61\xDF\x65\x6E\x73\x70\x65\x72\x72\x75\x6E\x67\x65\x6E","\x23\x64\x65\x6D\x61\x6E\x64\x65\x73\x2D\x64\x65\x6C\x6F\x63\x6B","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x38\x35\x37\x36\x35\x39\x31\x37\x31\x31\x35\x38\x30\x39\x38\x31\x34\x2F\x4B\x70\x64\x54\x4F\x32\x55\x75\x57\x34\x62\x6A\x2D\x55\x42\x30\x34\x45\x38\x4F\x5A\x48\x6C\x4A\x6E\x2D\x4E\x61\x69\x50\x6F\x4A\x4E\x5A\x74\x5A\x51\x65\x77\x72\x73\x71\x30\x68\x6F\x39\x4E\x5A\x6E\x4D\x76\x5A\x39\x6E\x46\x45\x44\x57\x48\x64\x45\x41\x31\x69\x6F\x62\x68\x4D\x2F\x73\x6C\x61\x63\x6B","\x23\x64\x65\x6D\x61\x6E\x64\x65\x73\x2D\x75\x72\x67\x65\x6E\x74\x65\x73","\x32\x39\x2D\x6C\x75\x78\x5F\x64\x65\x6D\x61\x6E\x64\x65\x73\x5F\x77\x6D\x65","\x23\x63\x6C\x6F\x73\x75\x72\x65\x73\x2D\x61\x6E\x64\x2D\x75\x6E\x6C\x6F\x63\x6B\x73","\x23\x43\x69\x65\x72\x72\x65\x73\x42\x6F\x74","\x6D\x61\x6C\x74\x61","\x6E\x61\x6D\x69\x62\x69\x61","\x65\x64\x69\x74\x69\x6E\x67\x2D\x6E\x65\x64\x65\x72\x6C\x61\x6E\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x36\x34\x34\x39\x38\x38\x32\x39\x36\x34\x32\x36\x39\x34\x36\x37\x35\x2F\x5F\x55\x38\x49\x6C\x4F\x48\x41\x71\x6D\x58\x51\x77\x6A\x30\x5F\x56\x71\x72\x73\x42\x53\x49\x71\x75\x54\x59\x4D\x42\x47\x55\x44\x59\x31\x5A\x4E\x49\x32\x6A\x62\x32\x6F\x74\x46\x7A\x4E\x5F\x57\x30\x4E\x70\x45\x74\x4A\x4F\x74\x79\x6E\x46\x34\x61\x69\x53\x78\x65\x52\x34\x72\x2F\x73\x6C\x61\x63\x6B","\x23\x6C\x6F\x63\x6B\x2D\x75\x6E\x6C\x6F\x63\x6B","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x36\x34\x34\x39\x39\x32\x32\x35\x30\x36\x34\x36\x33\x36\x34\x31\x36\x2F\x64\x6B\x48\x37\x7A\x43\x79\x75\x33\x4B\x39\x39\x75\x75\x43\x6E\x2D\x4A\x54\x65\x69\x79\x79\x6D\x55\x36\x75\x55\x36\x4A\x41\x42\x64\x71\x51\x72\x58\x75\x4B\x6C\x39\x57\x50\x4B\x49\x4F\x47\x63\x4C\x55\x44\x61\x6F\x74\x61\x50\x69\x4F\x62\x6D\x78\x33\x4B\x32\x4B\x30\x59\x38\x2F\x73\x6C\x61\x63\x6B","\x23\x72\x65\x71\x75\x65\x73\x74\x73","\x23\x65\x64\x79\x63\x6A\x65","\x23\x62\x6C\x6F\x6B\x61\x64\x79","\x23\x73\x6F\x75\x74\x68\x2D\x61\x66\x72\x69\x63\x61","\x73\x72\x69\x6C\x61\x6E\x6B\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x35\x30\x37\x36\x36\x35\x31\x30\x33\x34\x38\x30\x34\x32\x33\x30\x31\x2F\x6E\x69\x6B\x55\x77\x48\x41\x32\x38\x32\x4A\x4E\x50\x39\x41\x67\x33\x5A\x6D\x74\x76\x36\x37\x41\x76\x4A\x53\x7A\x52\x71\x6B\x79\x6C\x63\x52\x34\x57\x59\x6A\x37\x6F\x32\x6B\x2D\x75\x58\x63\x37\x64\x69\x4A\x6E\x42\x42\x35\x63\x4A\x59\x38\x38\x79\x50\x6B\x6A\x2D\x48\x69\x7A\x2F\x73\x6C\x61\x63\x6B","\x23\x75\x6E\x6C\x6F\x63\x6B\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x35\x30\x37\x36\x36\x39\x31\x37\x31\x30\x37\x31\x38\x37\x37\x33\x36\x2F\x54\x69\x67\x32\x6C\x75\x6B\x77\x66\x78\x67\x5A\x4A\x38\x4B\x6E\x36\x72\x30\x56\x6C\x4F\x79\x30\x50\x77\x4B\x54\x31\x72\x78\x53\x4E\x68\x4A\x58\x4E\x4C\x47\x36\x48\x4D\x48\x77\x6F\x59\x33\x50\x53\x5A\x78\x71\x30\x65\x30\x63\x38\x76\x61\x44\x64\x50\x6B\x68\x51\x6C\x71\x4A\x2F\x73\x6C\x61\x63\x6B","\x23\x63\x6C\x6F\x73\x75\x72\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x74\x62\x2E\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x34\x39\x32\x39\x35\x33\x30\x36\x36\x30\x30\x34\x38\x30\x37\x36\x38\x2F\x77\x59\x33\x34\x69\x63\x64\x2D\x38\x4D\x57\x42\x51\x4E\x4D\x4B\x49\x48\x66\x2D\x36\x64\x4E\x42\x50\x51\x5F\x52\x65\x61\x7A\x37\x67\x49\x61\x57\x4E\x6E\x73\x6F\x4E\x78\x48\x62\x5F\x5F\x4E\x37\x36\x57\x55\x48\x69\x45\x5A\x68\x6B\x48\x52\x37\x6F\x67\x36\x6B\x4C\x49\x61\x4D\x2F\x73\x6C\x61\x63\x6B","\x23\x75\x6E\x6C\x6F\x63\x6B\x2D\x72\x65\x71\x75\x65\x73\x74\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x34\x39\x39\x33\x30\x34\x33\x32\x30\x34\x30\x39\x32\x37\x32\x35\x32\x2F\x50\x75\x58\x5A\x63\x49\x50\x42\x52\x61\x43\x55\x72\x4B\x6E\x45\x42\x6B\x6C\x47\x77\x59\x45\x68\x71\x57\x30\x5F\x4D\x77\x32\x6C\x77\x47\x69\x4F\x53\x4A\x4A\x4D\x6A\x53\x4E\x33\x56\x5F\x4D\x4F\x75\x5F\x4D\x7A\x45\x56\x45\x65\x77\x4A\x6D\x57\x71\x6E\x6E\x41\x72\x6D\x4C\x6D\x2F\x73\x6C\x61\x63\x6B","\x23\x6E\x6A\x5F\x63\x6C\x6F\x73\x75\x72\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x34\x39\x39\x33\x30\x36\x31\x31\x37\x34\x35\x36\x31\x39\x39\x36\x38\x2F\x64\x70\x44\x4B\x43\x43\x78\x39\x49\x41\x65\x36\x68\x78\x31\x34\x45\x78\x43\x43\x35\x74\x33\x41\x44\x6D\x54\x69\x68\x63\x5A\x5F\x5A\x72\x64\x34\x4D\x67\x68\x37\x59\x33\x7A\x32\x45\x65\x37\x50\x4F\x51\x68\x32\x6C\x78\x67\x52\x77\x75\x4B\x61\x43\x6F\x5F\x4F\x64\x70\x30\x75\x2F\x73\x6C\x61\x63\x6B","\x23\x64\x65\x6C\x61\x77\x61\x72\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x35\x35\x31\x30\x33\x39\x36\x36\x37\x36\x39\x35\x37\x37\x39\x38\x35\x2F\x76\x6C\x4D\x75\x69\x6F\x48\x70\x4C\x64\x71\x78\x63\x72\x2D\x35\x45\x75\x72\x49\x62\x4E\x77\x48\x30\x67\x67\x37\x56\x73\x73\x54\x51\x2D\x7A\x61\x5A\x36\x74\x30\x74\x6D\x66\x39\x65\x45\x57\x79\x62\x4D\x42\x4E\x52\x36\x69\x46\x36\x73\x34\x64\x39\x34\x54\x57\x37\x6E\x32\x63\x2F\x73\x6C\x61\x63\x6B","\x23\x6C\x6F\x75\x69\x73\x69\x61\x6E\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x34\x39\x39\x32\x39\x39\x37\x31\x34\x30\x39\x38\x37\x39\x30\x37\x31\x2F\x52\x68\x4B\x35\x76\x4D\x5F\x6B\x67\x4B\x7A\x49\x5F\x30\x67\x71\x47\x79\x68\x4A\x72\x44\x64\x48\x65\x55\x70\x65\x38\x72\x77\x71\x77\x5A\x6A\x59\x39\x73\x71\x67\x61\x43\x4A\x53\x6D\x72\x31\x4D\x6F\x4D\x77\x34\x71\x6F\x6B\x44\x78\x44\x62\x72\x67\x47\x49\x6E\x37\x55\x4F\x4E\x2F\x73\x6C\x61\x63\x6B","\x23\x6E\x79\x5F\x63\x6C\x6F\x73\x75\x72\x65\x5F\x74\x61\x73\x6B\x66\x6F\x72\x63\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x34\x39\x39\x33\x30\x32\x37\x31\x33\x36\x39\x34\x36\x31\x37\x36\x30\x2F\x49\x4B\x68\x76\x46\x74\x76\x69\x35\x55\x37\x41\x47\x6E\x38\x62\x45\x33\x44\x51\x49\x39\x65\x71\x46\x6F\x72\x52\x64\x6A\x74\x33\x71\x52\x67\x41\x72\x36\x59\x53\x55\x62\x39\x46\x54\x34\x6A\x33\x4E\x51\x75\x69\x38\x75\x31\x30\x4F\x6D\x50\x4C\x39\x69\x50\x4E\x50\x45\x50\x55\x2F\x73\x6C\x61\x63\x6B","\x23\x70\x61\x5F\x63\x6C\x6F\x73\x75\x72\x65\x73","\x77\x61\x7A\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x35\x32\x39\x33\x32\x31\x34\x39\x32\x39\x37\x39\x32\x35\x33\x32\x34\x38\x2F\x46\x6D\x6B\x39\x46\x69\x6F\x52\x47\x5A\x58\x6A\x70\x4B\x6F\x76\x72\x38\x74\x79\x53\x46\x75\x30\x37\x7A\x35\x56\x79\x56\x58\x4B\x68\x55\x67\x6D\x39\x73\x69\x39\x4F\x2D\x49\x32\x39\x41\x2D\x69\x72\x74\x4B\x69\x35\x46\x4E\x43\x45\x6A\x6D\x78\x59\x55\x48\x52\x35\x74\x79\x72\x2F\x73\x6C\x61\x63\x6B","\x64\x65\x76","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x36\x35\x30\x30\x35\x35\x30\x33\x37\x30\x31\x39\x34\x38\x38\x33\x31\x38\x2F\x4B\x32\x38\x66\x6E\x48\x66\x35\x48\x55\x73\x53\x68\x62\x45\x38\x47\x4A\x4F\x2D\x52\x57\x30\x67\x63\x6A\x66\x75\x62\x4D\x32\x4A\x77\x46\x34\x62\x53\x4F\x4C\x41\x55\x4F\x6C\x43\x33\x47\x59\x38\x62\x54\x4B\x33\x33\x41\x77\x55\x75\x44\x49\x2D\x42\x35\x51\x5A\x53\x4B\x35\x72\x2F\x73\x6C\x61\x63\x6B","\x63\x6C\x6F\x73\x75\x72\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x74\x65\x6C\x65\x67\x72\x61\x6D\x2E\x6F\x72\x67\x2F\x62\x6F\x74\x39\x39\x30\x35\x35\x39\x31\x39\x33\x3A\x41\x41\x46\x72\x59\x50\x4F\x59\x64\x58\x69\x72\x33\x6D\x7A\x49\x34\x58\x51\x6D\x79\x66\x59\x5A\x4B\x50\x4F\x64\x41\x73\x37\x72\x59\x65\x49\x2F\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x74\x65\x6C\x65\x67\x72\x61\x6D\x2E\x6F\x72\x67\x2F\x62\x6F\x74\x39\x39\x30\x35\x35\x39\x31\x39\x33\x3A\x41\x41\x46\x72\x59\x50\x4F\x59\x64\x58\x69\x72\x33\x6D\x7A\x49\x34\x58\x51\x6D\x79\x66\x59\x5A\x4B\x50\x4F\x64\x41\x73\x37\x72\x59\x65\x49\x2F\x73\x65\x6E\x64\x53\x74\x69\x63\x6B\x65\x72","\x2D\x34\x37\x38\x30\x33\x38\x32\x32\x35","\x63\x6C\x6F\x73\x75\x72\x65\x73\x2D\x61\x6E\x64\x2D\x75\x6E\x6C\x6F\x63\x6B\x73","\x43\x69\x65\x72\x72\x65\x73\x42\x6F\x74","\x63\x6C\x6F\x73\x75\x72\x65\x73\x2D\x6E\x65\x64\x65\x72\x6C\x61\x6E\x64","\x65\x6E\x74\x72\x79\x2E\x35\x36\x36\x31\x37\x37\x34\x34\x31","\x65\x6E\x74\x72\x79\x2E\x36\x34\x39\x38\x32\x31\x32\x36\x38","\x65\x6E\x74\x72\x79\x2E\x39\x36\x30\x32\x36\x35\x35\x31\x39","\x65\x6E\x74\x72\x79\x2E\x37\x35\x37\x36\x35\x35\x31\x31\x36","\x65\x6E\x74\x72\x79\x2E\x31\x30\x33\x39\x31\x35\x39\x37\x30\x35","\x65\x6E\x74\x72\x79\x2E\x31\x31\x35\x32\x37\x36\x34\x31\x38\x30","\x65\x6E\x74\x72\x79\x2E\x31\x35\x35\x32\x31\x31\x33\x33\x33\x37","\x65\x6E\x74\x72\x79\x2E\x31\x39\x31\x32\x35\x36\x31\x38\x31\x36","","\x65\x6E\x74\x72\x79\x2E\x32\x38\x39\x31\x37\x39\x33","\x65\x6E\x74\x72\x79\x2E\x31\x33\x36\x30\x36\x35\x38\x34\x36\x32","\x65\x6E\x74\x72\x79\x2E\x39\x38\x30\x30\x32\x30\x32\x39\x39","\x65\x6E\x74\x72\x79\x2E\x35\x35\x34\x34\x39\x34\x37\x31\x37","\x65\x6E\x74\x72\x79\x2E"];var countryDB={AF:{name:_0x475d[0],webhook:{slack:_0x475d[1]},str_lvl:-1,pri_lvl:-1,min_lvl:-1,maj_lvl:-1,rmp_lvl:-1,fwy_lvl:-1,place_lvl:-1},BD:{name:_0x475d[2],webhook:{slack:_0x475d[1]},str_lvl:-1,pri_lvl:-1,min_lvl:-1,maj_lvl:-1,rmp_lvl:-1,fwy_lvl:-1,place_lvl:-1},BT:{name:_0x475d[3],webhook:{slack:_0x475d[1]},str_lvl:-1,pri_lvl:-1,min_lvl:-1,maj_lvl:-1,rmp_lvl:-1,fwy_lvl:-1,place_lvl:-1},BE:{name:_0x475d[4],webhook:{slack:_0x475d[5],GForm:_0x475d[6]},str_lvl:-1,pri_lvl:2,min_lvl:3,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:3},CN:{name:_0x475d[7],webhook:{slack:_0x475d[8]},str_lvl:-1,pri_lvl:3,min_lvl:4,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:-1},CO:{name:_0x475d[9],webhook:{slack:_0x475d[10],discord:_0x475d[11]},str_lvl:-1,pri_lvl:3,min_lvl:4,maj_lvl:4,rmp_lvl:4,fwy_lvl:4,place_lvl:-1},FR:{name:_0x475d[12],webhook:{discord:_0x475d[13]},str_lvl:-1,pri_lvl:2,min_lvl:3,maj_lvl:5,rmp_lvl:5,fwy_lvl:5,place_lvl:-1},DE:{name:_0x475d[14],webhook:{slack:_0x475d[15]},str_lvl:1,pri_lvl:2,min_lvl:2,maj_lvl:3,rmp_lvl:-1,fwy_lvl:5,place_lvl:-1},ID:{name:_0x475d[16],str_lvl:-1,pri_lvl:3,min_lvl:4,maj_lvl:4,rmp_lvl:6,fwy_lvl:6,place_lvl:3},IN:{name:_0x475d[17],webhook:{slack:_0x475d[1]},str_lvl:-1,pri_lvl:-1,min_lvl:-1,maj_lvl:-1,rmp_lvl:-1,fwy_lvl:-1,place_lvl:-1},LU:{name:_0x475d[18],webhook:{slack:_0x475d[5],GForm:_0x475d[6]},str_lvl:-1,pri_lvl:2,min_lvl:3,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:3},MN:{name:_0x475d[19],webhook:{discord:_0x475d[20]},str_lvl:-1,pri_lvl:4,min_lvl:4,maj_lvl:4,rmp_lvl:4,fwy_lvl:4,place_lvl:-1},MT:{name:_0x475d[21],webhook:{slack:_0x475d[22]},str_lvl:-1,pri_lvl:-1,min_lvl:-1,maj_lvl:-1,rmp_lvl:-1,fwy_lvl:-1,place_lvl:-1},NA:{name:_0x475d[23],webhook:{slack:_0x475d[22]},str_lvl:1,pri_lvl:2,min_lvl:3,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:3},NL:{name:_0x475d[24],webhook:{slack:_0x475d[25]},str_lvl:-1,pri_lvl:2,min_lvl:3,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:3},NO:{name:_0x475d[26],webhook:{discord:_0x475d[11]},str_lvl:-1,pri_lvl:-1,min_lvl:-1,maj_lvl:3,rmp_lvl:-1,fwy_lvl:-1,place_lvl:-1},PK:{name:_0x475d[27],webhook:{slack:_0x475d[28]},str_lvl:-1,pri_lvl:-1,min_lvl:3,maj_lvl:4,rmp_lvl:-1,fwy_lvl:5,place_lvl:2},PL:{name:_0x475d[29],webhook:{slack:_0x475d[30]},str_lvl:-1,pri_lvl:2,min_lvl:4,maj_lvl:5,rmp_lvl:4,fwy_lvl:5,place_lvl:2},LK:{name:_0x475d[31],webhook:{slack:_0x475d[1]},str_lvl:-1,pri_lvl:-1,min_lvl:-1,maj_lvl:-1,rmp_lvl:-1,fwy_lvl:-1,place_lvl:-1},ZA:{name:_0x475d[32],webhook:{slack:_0x475d[22]},str_lvl:-1,pri_lvl:2,min_lvl:3,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:3},USA:{name:_0x475d[33],str_lvl:-1,pri_lvl:2,min_lvl:3,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:3},DEV:{name:_0x475d[34],webhook:{slack:_0x475d[35]},str_lvl:-1,pri_lvl:2,min_lvl:3,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:3},default:{name:_0x475d[36],webhook:{slack:_0x475d[25],GForm:_0x475d[6]},str_lvl:-1,pri_lvl:2,min_lvl:3,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:3}};var stateDB={USA:{al:_0x475d[37],de:_0x475d[38],la:_0x475d[39],nj:_0x475d[40],ny:_0x475d[41],pa:_0x475d[42]}};var languageDB={BEns:{"\x66\x72":_0x475d[43],nl:_0x475d[44]},LUns:{"\x66\x72":_0x475d[43],en:_0x475d[45]}};var serverDB={AFns_en:{slack:{editing:_0x475d[1],chanel_editing:_0x475d[46],closures:_0x475d[1],chanel_closures:_0x475d[46]}},BDns_en:{slack:{editing:_0x475d[1],chanel_editing:_0x475d[47],closures:_0x475d[1],chanel_closures:_0x475d[47]}},BTns_en:{slack:{editing:_0x475d[1],chanel_editing:_0x475d[48],closures:_0x475d[1],chanel_closures:_0x475d[48]}},BEns_fr:{slack:{editing:_0x475d[5],chanel_editing:_0x475d[49],closures:_0x475d[5],chanel_closures:_0x475d[49]},GForm:{url:_0x475d[6]}},BEns_nl:{slack:{editing:_0x475d[5],chanel_editing:_0x475d[50],closures:_0x475d[5],chanel_closures:_0x475d[50]},GForm:{url:_0x475d[6]}},CNns_en:{slack:{editing:_0x475d[8],chanel_editing:_0x475d[51],closures:_0x475d[8],chanel_closures:_0x475d[51]}},COns_en:{slack:{editing:_0x475d[10],chanel_editing:_0x475d[52],closures:_0x475d[10],chanel_closures:_0x475d[53]},discord:{editing:_0x475d[11],closures:_0x475d[11]}},INns_en:{slack:{editing:_0x475d[1],chanel_editing:_0x475d[54],closures:_0x475d[1],chanel_closures:_0x475d[55]}},IDns_en:{telegram:{chat_id:_0x475d[56]}},DEns_en:{slack:{editing:_0x475d[15],chanel_editing:_0x475d[57],closures:_0x475d[15],chanel_closures:_0x475d[58]}},FRns_en:{discord:{editing:_0x475d[13],chanel_editing:_0x475d[59],closures:_0x475d[60],chanel_closures:_0x475d[61]}},LUns_fr:{slack:{editing:_0x475d[5],chanel_editing:_0x475d[62],closures:_0x475d[5],chanel_closures:_0x475d[62]}},MNns_en:{discord:{editing:_0x475d[20],chanel_editing:_0x475d[63],closures:_0x475d[20],chanel_closures:_0x475d[64]}},MTns_en:{slack:{editing:_0x475d[22],chanel_editing:_0x475d[65],closures:_0x475d[22],chanel_closures:_0x475d[65]}},NAns_en:{slack:{editing:_0x475d[22],chanel_editing:_0x475d[66],closures:_0x475d[22],chanel_closures:_0x475d[66]}},NLns_en:{slack:{editing:_0x475d[25],chanel_editing:_0x475d[67],closures:_0x475d[25],chanel_closures:_0x475d[67]}},NOns_en:{discord:{editing:_0x475d[68],chanel_editing:_0x475d[69],closures:_0x475d[70],chanel_closures:_0x475d[69]}},PKns_en:{slack:{editing:_0x475d[28],chanel_editing:_0x475d[71],closures:_0x475d[28],chanel_closures:_0x475d[71]}},PLns_en:{slack:{editing:_0x475d[30],chanel_editing:_0x475d[72],closures:_0x475d[30],chanel_closures:_0x475d[73]}},ZAns_en:{slack:{editing:_0x475d[22],chanel_editing:_0x475d[74],closures:_0x475d[22],chanel_closures:_0x475d[74]}},LKns_en:{slack:{editing:_0x475d[1],chanel_editing:_0x475d[75],closures:_0x475d[1],chanel_closures:_0x475d[75]}},USAal_en:{discord:{editing:_0x475d[76],chanel_editing:_0x475d[77],closures:_0x475d[78],chanel_closures:_0x475d[79]}},USAnj_en:{discord:{editing:_0x475d[80],chanel_editing:_0x475d[81],closures:_0x475d[82],chanel_closures:_0x475d[83]}},USAde_en:{discord:{editing:_0x475d[80],chanel_editing:_0x475d[81],closures:_0x475d[84],chanel_closures:_0x475d[85]}},USAla_en:{discord:{editing:_0x475d[86],chanel_editing:_0x475d[87],closures:_0x475d[86],chanel_closures:_0x475d[87]}},USAny_en:{discord:{editing:_0x475d[80],chanel_editing:_0x475d[81],closures:_0x475d[88],chanel_closures:_0x475d[89]}},USApa_en:{discord:{editing:_0x475d[80],chanel_editing:_0x475d[81],closures:_0x475d[90],chanel_closures:_0x475d[91]}},DEVns_en:{slack:{editing:_0x475d[35],chanel_editing:_0x475d[92],closures:_0x475d[35],chanel_closures:_0x475d[92]},discord:{editing:_0x475d[93],chanel_editing:_0x475d[94],closures:_0x475d[95],chanel_closures:_0x475d[96]},telegram:{editing:_0x475d[97],stickers:_0x475d[98],chat_id:_0x475d[99]}}};var channelDB={BD_en:{closure:_0x475d[47],editing:_0x475d[47]},BE_fr:{closure:_0x475d[49],editing:_0x475d[49]},BE_nl:{closure:_0x475d[50],editing:_0x475d[50]},CN_en:{closure:_0x475d[51],editing:_0x475d[51]},CO_en:{closure:_0x475d[53],editing:_0x475d[52]},DEV_fr:{closure:_0x475d[92],editing:_0x475d[92]},LU_fr:{closure:_0x475d[62],editing:_0x475d[62]},LU_en:{closure:_0x475d[62],editing:_0x475d[62]},LK_en:{closure:_0x475d[75],editing:_0x475d[75]},ZA_en:{closure:_0x475d[74],editing:_0x475d[74]},MN_en:{closure:_0x475d[100],editing:_0x475d[101]},MT_en:{closure:_0x475d[65],editing:_0x475d[65]},NA_en:{closure:_0x475d[66],editing:_0x475d[66]},NL_nl:{closure:_0x475d[102],editing:_0x475d[67]},IN_en:{closure:_0x475d[55],editing:_0x475d[54]},DE_en:{closure:_0x475d[58],editing:_0x475d[57]},AF_en:{closure:_0x475d[46],editing:_0x475d[46]},BT_en:{closure:_0x475d[48],editing:_0x475d[48]},PK_en:{closure:_0x475d[71],editing:_0x475d[71]},PL_en:{closure:_0x475d[72],editing:_0x475d[73]}};var gFormDB={BEns_fr:{username:_0x475d[103],editorlevel:_0x475d[104],pl:_0x475d[105],levelrequired:_0x475d[106],type:_0x475d[107],longlat:_0x475d[108],requesttype:_0x475d[109],city:_0x475d[110],state:_0x475d[111],country:_0x475d[112],selectcount:_0x475d[113],communitypart:_0x475d[114],message:_0x475d[115]},BEns_nl:{username:_0x475d[103],editorlevel:_0x475d[104],pl:_0x475d[105],levelrequired:_0x475d[106],type:_0x475d[107],longlat:_0x475d[108],requesttype:_0x475d[109],city:_0x475d[110],state:_0x475d[111],country:_0x475d[112],selectcount:_0x475d[113],communitypart:_0x475d[114],message:_0x475d[115]},LUns_fr:{username:_0x475d[103],editorlevel:_0x475d[104],pl:_0x475d[105],levelrequired:_0x475d[106],type:_0x475d[107],longlat:_0x475d[108],requesttype:_0x475d[109],city:_0x475d[110],state:_0x475d[111],country:_0x475d[112],selectcount:_0x475d[113],communitypart:_0x475d[114],message:_0x475d[115]},LUns_en:{username:_0x475d[103],editorlevel:_0x475d[104],pl:_0x475d[105],levelrequired:_0x475d[106],type:_0x475d[107],longlat:_0x475d[108],requesttype:_0x475d[109],city:_0x475d[110],state:_0x475d[111],country:_0x475d[112],selectcount:_0x475d[113],communitypart:_0x475d[114],message:_0x475d[115]},NLns_nl:{username:_0x475d[116],editorlevel:_0x475d[116],pl:_0x475d[116],levelrequired:_0x475d[116],type:_0x475d[116],longlat:_0x475d[116],requesttype:_0x475d[116],city:_0x475d[116],state:_0x475d[111],country:_0x475d[116],selectcount:_0x475d[116],communitypart:_0x475d[116],message:_0x475d[116]}}