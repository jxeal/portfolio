// Create your own email TemplateContext. Mine is created using stripo 


export default function emailFunc(name:string, email_id:string, phone:number, service:string, message:string){
    const emailStr = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Thank You for Contacting</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
      rel="stylesheet"
    />
    <!--<![endif]-->
    <!--[if mso
      ]><xml>
        <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
          <w:DontUseAdvancedTypographyReadingMail />
        </w:WordDocument> </xml
    ><![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: block !important;
      }
      .rollover span {
        font-size: 0px;
      }
      u + .body img ~ div div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors],
      #MessageViewBody a {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      @media only screen and (max-width: 600px) {
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0px !important;
        }
        .es-m-p10b {
          padding-bottom: 10px !important;
        }
        .es-m-p25t {
          padding-top: 25px !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-p-default {
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 30px !important;
          text-align: left;
        }
        h2 {
          font-size: 24px !important;
          text-align: left;
        }
        h3 {
          font-size: 20px !important;
          text-align: left;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 24px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 14px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 14px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover span,
        .es-m-txt-c .rollover span,
        .es-m-txt-l .rollover span {
          line-height: 0 !important;
          font-size: 0 !important;
          display: block;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 18px !important;
          padding: 10px 20px 10px 20px !important;
          line-height: 120% !important;
        }
        a.es-button,
        button.es-button,
        .es-button-border {
          display: inline-block !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .h-auto {
          height: auto !important;
        }
        .es-text-4028 .es-text-mobile-size-20,
        .es-text-4028 .es-text-mobile-size-20 * {
          font-size: 20px !important;
          line-height: 150% !important;
        }
        .es-text-8499 .es-text-mobile-size-20,
        .es-text-8499 .es-text-mobile-size-20 * {
          font-size: 20px !important;
          line-height: 150% !important;
        }
        .es-text-5710 .es-text-mobile-size-28.es-override-size,
        .es-text-5710 .es-text-mobile-size-28.es-override-size * {
          font-size: 28px !important;
          line-height: 150% !important;
        }
      }
      @media screen and (max-width: 384px) {
        .mail-message-content {
          width: 414px !important;
        }
      }
    </style>
  </head>
  <body
    class="body"
    style="
      width: 100%;
      height: 100%;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div
      dir="ltr"
      class="es-wrapper-color"
      lang="en"
      style="background-color: #e1ecf7"
    >
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#e1ecf7"></v:fill>
        </v:background>
      <![endif]-->
      <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        class="es-wrapper"
        role="none"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #e1ecf7;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-header"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-header-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #00406c;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        background="https://eubqlnu.stripocdn.email/content/guids/CABINET_6f9d83b80177d8b167931476b19c1a93771b0adf997a5763541ce813aa5572d7/images/an_audaciously_futuristic_skys.jpeg"
                        style="
                          padding: 40px;
                          margin: 0;
                          background-image: url(https://eubqlnu.stripocdn.email/content/guids/CABINET_6f9d83b80177d8b167931476b19c1a93771b0adf997a5763541ce813aa5572d7/images/an_audaciously_futuristic_skys.jpeg);
                          background-repeat: no-repeat;
                          background-position: center 95%;
                          background-size: cover;
                        "
                      >
                        <!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr><td style="width:224px" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          align="left"
                          class="es-left"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 224px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    class="es-m-txt-c"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      font-size: 0px;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://www.sayakcodes.in/"
                                      style="
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #f8f9fb;
                                        font-size: 12px;
                                      "
                                      ><img
                                        src="https://eubqlnu.stripocdn.email/content/guids/CABINET_70f57c3e8f98018a1dedbe6ce846420449b28b2f6a6c564861e1950a4b083e4e/images/untitled_design.png"
                                        alt=""
                                        title=""
                                        width="224"
                                        class="adapt-img"
                                        style="
                                          display: block;
                                          font-size: 16px;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                        "
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:53px"></td><td style="width:243px" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          align="right"
                          class="es-right"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 243px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="right"
                                    class="es-text-4028 es-m-p0t"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 15px;
                                    "
                                  >
                                    <p
                                      class="es-m-txt-c es-text-mobile-size-20"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: 'Josefin Sans', helvetica,
                                          arial, sans-serif;
                                        line-height: 30px;
                                        letter-spacing: 0;
                                        color: #f8f9fb;
                                        font-size: 20px;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        href="tel:+919733726522"
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #f8f9fb;
                                          font-size: 20px;
                                        "
                                        >(+91) 97337 26522</a
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="right"
                                    class="es-text-8499"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                    "
                                  >
                                    <p
                                      class="es-m-txt-c es-text-mobile-size-20"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: 'Josefin Sans', helvetica,
                                          arial, sans-serif;
                                        line-height: 30px;
                                        letter-spacing: 0;
                                        color: #f8f9fb;
                                        font-size: 20px;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        href="mailto:realagency@gmail.com"
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #f8f9fb;
                                          font-size: 20px;
                                        "
                                        >zhunxeal@gmail.com</a
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-content"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-content-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #f8f9fb;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        class="es-m-p0b"
                        style="
                          margin: 0;
                          padding-top: 40px;
                          padding-right: 40px;
                          padding-bottom: 30px;
                          padding-left: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    class="es-m-p10b es-text-5710"
                                    style="padding: 0; margin: 0"
                                  >
                                    <h1
                                      class="es-text-mobile-size-28 es-override-size"
                                      style="
                                        margin: 0;
                                        font-family: 'Josefin Sans', helvetica,
                                          arial, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 35px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 48px;
                                        color: #001523;
                                      "
                                    >
                                      Thank You for Contacing Me🌟
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-right: 40px;
                          padding-bottom: 30px;
                          padding-left: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: 'Josefin Sans', helvetica,
                                          arial, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #001523;
                                        font-size: 16px;
                                      "
                                    >
                                      Thank you for taking the time to provide
                                      us with your valuable feedback. We
                                      appreciate your input and are grateful for
                                      your honesty and openness.
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: 'Josefin Sans', helvetica,
                                          arial, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #001523;
                                        font-size: 16px;
                                      "
                                    >
                                        <br/>
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: 'Josefin Sans', helvetica,
                                          arial, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #001523;
                                        font-size: 16px;
                                      "
                                    >
                                      Here's a copy of the form you filled
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: 'Josefin Sans', helvetica,
                                          arial, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #001523;
                                        font-size: 16px;
                                      "
                                    >
                                        <p><b>Name:</b> ${name}</p>
                                        <p><b>Email:</b> ${email_id} </p>
                                        <p><b>Contact No:</b> ${phone}</p>
                                        <p><b>Service:</b> ${service}<p>
                                        <p><b>Message: </b>${message}</p></p> <br />
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: 'Josefin Sans', helvetica,
                                          arial, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #001523;
                                        font-size: 16px;
                                      "
                                    >
                                      Thank you again for your feedback, and
                                      please do not hesitate to reach out to us
                                      if you have any further questions or
                                      concerns.
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: 'Josefin Sans', helvetica,
                                          arial, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #001523;
                                        font-size: 16px;
                                      "
                                    >
                                      Best regards<br />
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-content"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-content-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #f8f9fb;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-right: 40px;
                          padding-left: 40px;
                          padding-top: 20px;
                          padding-bottom: 40px;
                        "
                      >
                        <!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr><td style="width:95px" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          align="left"
                          class="es-left"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 95px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="right"
                                    class="es-m-txt-c"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      font-size: 0px;
                                    "
                                  >
                                    <img
                                      src="https://eubqlnu.stripocdn.email/content/guids/CABINET_6f9d83b80177d8b167931476b19c1a93771b0adf997a5763541ce813aa5572d7/images/image.jpeg"
                                      alt="Sayak Majumder"
                                      width="95"
                                      title="Sayak Majumder"
                                      class="adapt-img"
                                      style="
                                        display: block;
                                        font-size: 16px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                        border-radius: 24px;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:20px"></td><td style="width:405px" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          align="right"
                          class="es-right"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 405px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    class="es-m-p25t"
                                    style="padding: 0; margin: 0"
                                  >
                                    <h2
                                      class="es-m-txt-c"
                                      style="
                                        margin: 0;
                                        font-family: 'Josefin Sans', helvetica,
                                          arial, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 32px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 38.4px;
                                        color: #001523;
                                      "
                                    >
                                      Sayak Majumder
                                    </h2>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="left"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 5px;
                                    "
                                  >
                                    <p
                                      class="es-m-txt-c"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: 'Josefin Sans', helvetica,
                                          arial, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #001523;
                                        font-size: 16px;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        href="tel:(+91) 97337 26522"
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #001523;
                                          font-size: 14px;
                                        "
                                        >(+91) 97337 26522</a
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="left"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 5px;
                                    "
                                  >
                                    <p
                                      class="es-m-txt-c"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: 'Josefin Sans', helvetica,
                                          arial, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #001523;
                                        font-size: 16px;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        href="mailto:zhunxeal@gmail.com"
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #001523;
                                          font-size: 14px;
                                        "
                                        >zhunxeal@gmail.com</a
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-footer"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-footer-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #00406c;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        background="https://eubqlnu.stripocdn.email/content/guids/CABINET_6f9d83b80177d8b167931476b19c1a93771b0adf997a5763541ce813aa5572d7/images/an_audaciously_futuristic_skys.jpeg"
                        style="
                          margin: 0;
                          padding-right: 40px;
                          padding-bottom: 30px;
                          padding-left: 40px;
                          padding-top: 30px;
                          background-image: url(https://eubqlnu.stripocdn.email/content/guids/CABINET_6f9d83b80177d8b167931476b19c1a93771b0adf997a5763541ce813aa5572d7/images/an_audaciously_futuristic_skys.jpeg);
                          background-repeat: no-repeat;
                          background-position: center 100%;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          align="left"
                          class="es-left"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              class="es-m-p20b"
                              style="padding: 0; margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    class="es-m-txt-c"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      font-size: 0px;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://viewstripo.email"
                                      style="
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #f8f9fb;
                                        font-size: 12px;
                                      "
                                      ><img
                                        src="https://eubqlnu.stripocdn.email/content/guids/CABINET_70f57c3e8f98018a1dedbe6ce846420449b28b2f6a6c564861e1950a4b083e4e/images/untitled_design.png"
                                        alt=""
                                        height="75"
                                        class="adapt-img"
                                        style="
                                          display: block;
                                          font-size: 16px;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                        "
                                    /></a>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-table-not-adapt es-social"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://x.com/zhunxeal"
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #f8f9fb;
                                              font-size: 12px;
                                            "
                                            ><img
                                              src="https://eubqlnu.stripocdn.email/content/assets/img/social-icons/rounded-white/x-rounded-white.png"
                                              alt="X"
                                              title="X"
                                              height="40"
                                              style="
                                                display: block;
                                                font-size: 16px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://www.instagram.com/i.am.sayak.03"
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #f8f9fb;
                                              font-size: 12px;
                                            "
                                            ><img
                                              src="https://eubqlnu.stripocdn.email/content/assets/img/social-icons/rounded-white/instagram-rounded-white.png"
                                              alt="Ig"
                                              title="Instagram"
                                              height="40"
                                              style="
                                                display: block;
                                                font-size: 16px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://github.com/jxeal"
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #f8f9fb;
                                              font-size: 12px;
                                            "
                                            ><img
                                              title="GitHub"
                                              height="40"
                                              src="https://eubqlnu.stripocdn.email/content/assets/img/other-icons/rounded-white/github-rounded-white.png"
                                              alt="GitHub"
                                              style="
                                                display: block;
                                                font-size: 16px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`
;
 return emailStr;
}