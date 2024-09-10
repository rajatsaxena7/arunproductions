const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express(); 

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "Info@gully2global.com",
    pass: "Shasudigi@217",
  },
});

function event(eventname, datetime,address,description,imageqr) {
  return `
    <!DOCTYPE html>
<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
    <!--[if !mso]><!-->
    <!--<![endif]-->
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 0;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
        }

        #MessageViewBody a {
            color: inherit;
            text-decoration: none;
        }

        p {
            line-height: inherit
        }

        .desktop_hide,
        .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
        }

        .image_block img+div {
            display: none;
        }

        sup,
        sub {
            line-height: 0;
            font-size: 75%;
        }

        @media (max-width:650px) {
            .desktop_hide table.icons-inner {
                display: inline-block !important;
            }

            .icons-inner {
                text-align: center;
            }

            .icons-inner td {
                margin: 0 auto;
            }

            .mobile_hide {
                display: none;
            }

            .row-content {
                width: 100% !important;
            }

            .stack .column {
                width: 100%;
                display: block;
            }

            .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
            }

            .desktop_hide,
            .desktop_hide table {
                display: table !important;
                max-height: none !important;
            }
        }
    </style>
    <!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>

<body class="body" style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
        <tbody>
            <tr>
                <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 630px; margin: 0 auto;" width="630">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1 mobile_hide" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                        <tr>
                                                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 30px solid #ffffff;"><span style="word-break: break-word;"> </span></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 630px; margin: 0 auto;" width="630">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 48px; padding-top: 33px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-bottom:28px;">
                                                                <div style="color:#545454;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:20px;letter-spacing:4px;line-height:180%;text-align:center;mso-line-height-alt:36px;">
                                                                    <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2a272b;"><strong>DJ Arun <br />Productions</strong></span></p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 48px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1 mobile_hide" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:30px;">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                        <tr>
                                                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;"> </span></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="width:100%;">
                                                                <div align="left" class="alignment" style="line-height:10px">
                                                                    <div style="max-width: 210px;"><img alt="I'm an image" height="auto" src="images/DAP_Logo.jpg" style="display: block; height: auto; border: 0; width: 100%;" title="I'm an image" width="210" /></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 630px; margin: 0 auto;" width="630">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                                                    <div class="spacer_block block-1" style="height:1px;line-height:1px;font-size:1px;"> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-image: url('images/hero-invite.jpg'); background-position: center top; background-repeat: no-repeat; color: #000000; width: 630px; margin: 0 auto;" width="630">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 60px; padding-left: 48px; padding-right: 48px; padding-top: 60px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="color:transparent;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                    <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #004afd;"><strong>Arun Productions presents</strong></span></p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-bottom:28px;padding-top:20px;">
                                                                <div style="color:#555555;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:31px;line-height:120%;text-align:left;mso-line-height-alt:37.199999999999996px;">
                                                                    <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2a272b;"><strong>${eventname}</strong></span></p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="10" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <h2 style="margin: 0; color: #866666; direction: ltr; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 14.399999999999999px;"><span class="tinyMce-placeholder" style="word-break: break-word;">Scan this QR Code at the venue to avail your entry.</span></h2>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="width:100%;">
                                                                <div align="center" class="alignment" style="line-height:10px">
                                                                    <div style="max-width: 324px;"><img height="auto" src=${imageqr} style="display: block; height: auto; border: 0; width: 100%;" width="324" /></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="10" cellspacing="0" class="heading_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <h1 style="margin: 0; color: #7747FF; direction: ltr; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 15px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 18px;"><span class="tinyMce-placeholder" style="word-break: break-word;">OR</span></h1>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="button_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="text-align:center;">
                                                                <div align="center" class="alignment">
                                                                    <!--[if mso]>
                                                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:43px;width:103px;v-text-anchor:middle;" arcsize="135%" stroke="false" fillcolor="#004afd">
                                                                    <w:anchorlock/>
                                                                    <v:textbox inset="0px,1px,0px,0px">
                                                                    <center dir="false" style="color:#ffffff;font-family:Arial, sans-serif;font-size:15px">
                                                                    <![endif]-->
                                                                   <a href="https://www.google.com" target = "_blank" style ="text-decoration:none;"> <div style="background-color:#004afd;border-bottom:0px solid transparent;border-left:0px solid transparent;border-radius:58px;border-right:0px solid transparent;border-top:0px solid transparent;color:#ffffff;display:inline-block;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:15px;font-weight:undefined;mso-border-alt:none;padding-bottom:6px;padding-top:7px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="word-break: break-word; padding-left: 17px; padding-right: 17px; font-size: 15px; display: inline-block; letter-spacing: normal;"><span style="word-break: break-word; line-height: 30px;">Click Here</span></span></div></a>
                                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-7 mobile_hide" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-top:50px;">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                        <tr>
                                                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;"> </span></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1 mobile_hide" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-top:50px;">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                        <tr>
                                                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;"> </span></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-2 mobile_hide" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-top:50px;">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                        <tr>
                                                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;"> </span></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-3 mobile_hide" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-top:50px;">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                        <tr>
                                                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;"> </span></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 630px; margin: 0 auto;" width="630">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 32px; padding-right: 32px; padding-top: 60px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="width:100%;">
                                                                <div align="center" class="alignment" style="line-height:10px">
                                                                    <div style="max-width: 96px;"><img alt="I'm an image" height="auto" src="images/Time.png" style="display: block; height: auto; border: 0; width: 100%;" title="I'm an image" width="96" /></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:18px;">
                                                                <div style="color:#555555;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:20px;line-height:120%;text-align:center;mso-line-height-alt:24px;">
                                                                    <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2a272b;"><strong>${datetime}</strong></span></p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-top:42px;">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                        <tr>
                                                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;"> </span></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="width:100%;">
                                                                <div align="center" class="alignment" style="line-height:10px">
                                                                    <div style="max-width: 96px;"><img alt="I'm an image" height="auto" src="images/Location.png" style="display: block; height: auto; border: 0; width: 100%;" title="I'm an image" width="96" /></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:18px;">
                                                                <div style="color:#555555;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:20px;line-height:120%;text-align:center;mso-line-height-alt:24px;">
                                                                    <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2a272b;"><strong>${address}</strong></span></p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 55px; padding-left: 48px; padding-right: 32px; padding-top: 50px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-bottom:10px;padding-top:10px;">
                                                                <div style="color:#555555;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
                                                                    <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2a272b;">${description}</span></p>
                                                                    <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2a272b;"> </span></p>
                                                                    <p style="margin: 0; word-break: break-word;"><br /><span style="word-break: break-word; color: #2a272b;">${description}</span></p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 630px; margin: 0 auto;" width="630">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 48px; padding-top: 33px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="width:100%;">
                                                                <div align="left" class="alignment" style="line-height:10px">
                                                                    <div style="max-width: 162px;"><img alt="I'm an image" height="auto" src="images/DAP_Logo.jpg" style="display: block; height: auto; border: 0; width: 100%;" title="I'm an image" width="162" /></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="empty_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 48px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1 mobile_hide" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:30px;">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                        <tr>
                                                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;"> </span></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="padding-bottom:28px;padding-right:48px;">
                                                                <div style="color:#555555;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;line-height:150%;text-align:left;mso-line-height-alt:21px;">
                                                                    <p style="margin: 0; word-break: break-word;">Copyright © 2020</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 630px; margin: 0 auto;" width="630">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                                                    <table border="0" cellpadding="15" cellspacing="0" class="divider_block mobile_hide block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                        <tr>
                                                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;"> </span></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 630px; margin: 0 auto;" width="630">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                <!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                <!--[if !vml]><!-->
                                                                <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; padding-left: 0px; padding-right: 0px;">
                                                                    <!--<![endif]-->
                                                                    <tr>
                                                                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Beefree Logo" class="icon" height="auto" src="images/Beefree-logo.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="34" /></a></td>
                                                                        <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center; line-height: normal;"><a href="http://designedwithbeefree.com/" style="color: #1e0e4b; text-decoration: none;" target="_blank">Designed with Beefree</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: center; vertical-align: top; padding-top: 20px; padding-bottom: 20px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                                                                            <p style="margin: 0; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 16px; color: #1e0e4b; line-height: 1.5;">
                                                                                Visit our website: <a href="https://djarunproductions.com/" style="color: #004afd; text-decoration: none;" target="_blank">djarunproductions.com</a>
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- End -->
</body>

</html>
`;
}

function welcomeevent(username,eventname) {
    return `
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Success - Arun Production</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #555555; /* Unified elegant dark color for the entire page */
            color: #f5f5f5; /* Light text color */
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh; /* Center the container vertically and horizontally */
        }

        .email-container {
            max-width: 600px;
            background-color: #555555; /* Darker email container background */
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        /* Unified Header and Content Styling */
        .content {
            padding: 40px 20px;
            text-align: center;
            background-color: #555555; /* Red background for the content section */
            color: #ffffff; /* White text for better contrast */
        }

        .content img {
            max-width: 200px; /* Increase max-width to enlarge the logo */
            margin-bottom: 10px;
            border-radius: 50%;
        }

        .content h1 {
            font-size: 32px;
            margin: 10px 0;
            color: #ffffff; /* White text for the title */
        }

        .content h2 {
            color: #ffebee; /* Slightly lighter shade for subheading */
            font-size: 24px;
            margin: 20px 0 15px;
        }

        .content p {
            font-size: 16px;
            color: #f5f5f5;
            margin-bottom: 30px;
        }

        .content p span {
            color: #ffccbc; /* Lighter red/orange for the highlighted text */
            font-weight: bold;
        }

        .event-details {
            background-color:#555555; /* Gray background for event details */
            color: #ffffff;
            padding: 20px;
            border-top: 5px solid #555555; /* Red border to match content section */
        }

        .event-details strong {
            color: #ffab91; /* Lighter orange for event title */
        }

        .footer {
            background-color: #da3b0b; /* Slightly lighter gray footer */
            padding: 20px;
            text-align: center;
        }

        .footer a {
            text-decoration: none;
            font-size: 14px;
            color: #ffccbc; /* Soft orange for links */
            font-weight: bold;
        }

        .footer a:hover {
            color: #ffffff; /* White text on hover */
        }
    </style>
</head>
<body>

<div class="email-container">
    <!-- Unified Header with Logo, Company Name, and Event Details -->
    <div class="content">
        <img src="C:\Users\PRERANA R\Downloads\Arun Productions logo.png" alt="Arun Production Logo"/>
        <h1>Arun Production</h1>
        <h2>Welcome to the Event!</h2>
        <p>You have successfully logged in as <span>${username}</span>.</p>
    </div>

    <!-- Event Details Section -->
    <div class="event-details">
        <p>We are excited to have you for our upcoming event "<strong>${eventname}</strong>".</p>
        <p>Stay tuned for more details and let the rhythm take over!</p>
    </div>

    <!-- Footer Section with Website Link -->
    <div class="footer">
        <p>Visit our official website: <a href="https://djarunproductions.com/">www.arunproduction.com</a></p>
    </div>
</div>

</body>
</html>                    
                
  `;
  }

  function feedback(eventname) {
    return `
                      
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Feedback - Arun Production</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #555555; /* Unified background color for the entire page */
            color: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh; /* Center the container vertically and horizontally */
        }

        .email-container {
            max-width: 600px;
            width: 100%;
            background-color: #1c1a1a; /* Same background color as the body */
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .content {
            padding: 40px 20px;
            text-align: center;
            background-color: #555555;
            color: #ffffff;
        }

        .content img {
            max-width: 200px; /* Increased size of the logo */
            margin-bottom: 10px;
            border-radius: 50%;
        }

        .content h1 {
            font-size: 32px;
            margin: 10px 0;
            color: #ffffff;
        }

        .content h2 {
            color: #ffebee;
            font-size: 24px;
            margin: 20px 0 15px;
        }

        .content p {
            font-size: 16px;
            color: #f5f5f5;
            margin-bottom: 30px;
        }

        .content p span {
            color: #ffccbc;
            font-weight: bold;
        }

        .feedback-section {
            background-color: #555555;
            color: #ffffff;
            padding: 20px;
            border-top: 5px solid #555555;
            text-align: center;
        }

        .feedback-section p {
            font-size: 16px;
            color: #ffffff;
            margin-bottom: 20px;
        }

        .feedback-section a {
            background-color: #ffab91;
            color: #1c1a1a;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }

        .feedback-section a:hover {
            background-color: #ff8a65;
            color: #ffffff;
        }

        .footer {
            background-color: #1c1a1a;
            padding: 20px;
            text-align: center;
        }

        .footer a {
            text-decoration: none;
            font-size: 14px;
            color: #ffccbc;
            font-weight: bold;
        }

        .footer a:hover {
            color: #ffffff;
        }
    </style>
</head>
<body>

<div class="email-container">
    <!-- Header with Event Title and Logo -->
    <div class="content">
        <img src="https://firebasestorage.googleapis.com/v0/b/arunproductions.appspot.com/o/users%2FqsnVaPZl60P7KC0lLlrUR6XXnqy1%2Fqr_codes%2Femail_images%2FWhatsApp_Image_2024-09-05_at_12.35.08_7a9ae555-removebg-preview.png?alt=media&token=243256f4-6a66-47a7-a663-23ac5b264f53" alt="Arun Production Logo" />
        <h1>Arun Production</h1>
        <h2>Thank You for Attending!</h2>
        <p>We hope you enjoyed <span>${eventname}</span>!</p>
    </div>

    <!-- Feedback Section -->
    <div class="feedback-section">
        <p>Your feedback is valuable to us. Please take a moment to share your thoughts on the event.</p>
        <a href="https://forms.gle/dxokDTqP875zTRZe8" target="_blank">Give Feedback</a>
    </div>

    <!-- Footer Section with Website Link -->
    <div class="footer">
        <p>Visit our official website: <a href="https://djarunproductions.com/">www.arunproduction.com</a></p>
    </div>
</div>

</body>
</html>       
  `;
  }


 
  
  
 




  

// POST endpoint to send email
app.post("/event", async (req, res) => {
  const { email, eventname, datetime,address,description,imageqr} = req.body;

  if (!email || !eventname || !datetime || !address || ! description|| !imageqr) {
    return res
      .status(400)
      .send({ error: "email, eventname, datetime,address, description parameters are required" });
  }

  const htmlContent = event(eventname, datetime,address,description,imageqr);

  try {
    let info = await transporter.sendMail({
      from: "Info@gully2global.com", // Sender address
      to: email, // List of receivers
      subject: "invitation", // Subject line
      html: htmlContent, // HTML body content
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ error: "Failed to send email" });
  }
});

app.post("/welcome_event", async (req, res) => {
    const { email,username,eventname } = req.body;
  
    if (!email || 
        !username ||
         !eventname 
         ) {
      return res
        .status(400)
        .send({ error: "email, username and eventname parameters are required" });
    }
  
    const htmlContent = welcomeevent(username,eventname);
  
    try {
      let info = await transporter.sendMail({
        from: "Info@gully2global.com", // Sender address
        to: email, // List of receivers
        subject: "Welcome Event", // Subject line
        html: htmlContent, // HTML body content
      });
  
      console.log("Message sent: %s", info.messageId);
      res.status(200).send({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ error: "Failed to send email" });
    }
  });


app.post("/feedback", async (req, res) => {
    const { email, eventname } = req.body;
  
    if (!email ||!eventname) {
      return res
        .status(400)
        .send({ error: "email, eventname parameters are required" });
    }
  
    const htmlContent = feedback(eventname);
  
    try {
      let info = await transporter.sendMail({
        from: "Info@gully2global.com", // Sender address
        to: email, // List of receivers
        subject: "Feedback", // Subject line
        html: htmlContent, // HTML body content
      });
  
      console.log("Message sent: %s", info.messageId);
      res.status(200).send({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ error: "Failed to send email" });
    }
  });

// Start the server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
