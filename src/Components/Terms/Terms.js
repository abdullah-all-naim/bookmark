import React, { useState } from 'react';
import logo from '../../logo.png';
import frame from '../../frame.png';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import back from '../../back.png'
const Terms = () => {
    document.title = 'QikDaw | Terms&Services'
    const [status, setStatus] = useState(false)
    const history = useHistory()
    return (
        <>
            <div className="d-flex flex-wrap justify-content-between" >
                <Link to="/home" className='mt-3 px-4 text-center' style={{ height: '100px' }}>
                    <img className='img-responsive' style={{ width: '150px' }} src={logo} alt="" />
                    <h5 style={{ color: '#ABABAB' }}>Quick door to the world</h5>
                </Link>
                <div className='d-none d-sm-flex'>
                    <img className='img-responsive' src={frame} alt="" />
                </div>
            </div>
            <div className='d-flex'>
                <div className='col-3' style={{ cursor: 'pointer' }} onClick={() => {
                                        history.push('/home')
                                        

                                    }}>
                                        <img style={{ width: '80px' }} src={back} alt="" />
                </div>

            </div>
            <div className='container mb-5' style={{ minHeight: '70vh', color: 'grey' }}>
                <h4>QIKDAW TERMS OF SERVICE AGREEMENT</h4>
                <div>
                    <h5 style={{ fontStyle: 'italic' }}>
                        PLEASE READ THE FOLLOWING TERMS OF USE AGREEMENT CAREFULLY. BY ACCESSING OR USING OUR SITES AND OUR SERVICES, YOU HEREBY AGREE TO BE BOUND BY THE TERMS AND ALL TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT EXPRESSLY AGREE TO ALL OF THE TERMS AND CONDITIONS, THEN PLEASE DO NOT ACCESS OR USE OUR SITES OR OUR SERVICES.
                    </h5>
                    <h6>ACCEPTANCE OF TERMS</h6>
                    <p>
                        The following Terms of Service Agreement (the “TOS”) is a legally binding agreement that shall govern the relationship with our users and others which may interact or interface with QikDaw also known as QDaw, located at Garland, Texas, 75044 and our subsidiaries and affiliates, in association with the use of the QikDaw website, which includes QikDaw (the “QikDaw”) and its Services, which shall be defined below.
                    </p>
                    <h6>DESCRIPTION OF WEBSITE SERVICES OFFERED</h6>
                    <div>
                        <p>QikDaw is a web access portal/tool/services that allows its users to quickly access websites they use.</p>
                        <p>QikDaw DO NOT store your password for these websites.</p>
                        <p>QikDaw only stores the URL address of the website.</p>

                        <p>In addition to above description:</p>

                        <p>Any and all visitors to our site, despite whether they are registered or not, shall be deemed as “users” of the herein contained Services provided for the purpose of this TOS. Once an individual registers for our Services, through the process of creating an account, the user shall then be considered a “member.”</p>

                        The user and/or member acknowledges and agrees that the services provided and made available through our website and applications, which may include some mobile applications and that those applications may be made available on various social media networking sites and numerous other platforms, and downloadable programs. At its discretion, QikDaw may offer additional website services and/or products, or update, modify or revise any current content and services, and this Agreement shall apply to any and all additional services and/or products and any and all updated, modified or revised services unless otherwise stipulated. QikDaw does hereby reserve the right to cancel and cease offering any of the aforementioned services and/or products. You, as the end user and/or member, acknowledges, accepts and agrees that QikDaw shall not be held liable for any such update, modification, revisions, suspensions or discontinuance of any of our services and/or products. Your continued use of the services provided, after such posting of any updates, changes, and/or modifications shall constitute your acceptance of such updates, changes and/or modifications, and as such, frequent review of this Agreement and any and all applicable terms and policies should be made by you to ensure you are aware of all terms and policies currently in effect. Should you not agree to the updated, modified, revised or modified terms, you must stop using the provided services.

                        <p>Furthermore, the user and/or member understands, acknowledges and agrees that the Services offered shall be provided “AS-IS” and as such QikDaw shall not assume any responsibility or obligation for the timeliness, missed delivery, deletion and/or any failure to store user content, communication or personalization settings.</p>

                    </div>
                    <h6>REGISTRATION</h6>
                    <p>
                        To register and become a “member” of QikDaw, you must be 13 years of age or above to enter into and form a legally binding contract. In addition, you must be in good standing and not an individual that has been previously barred from receiving QikDaw’s Services under the laws and statutes of the United States or other applicable jurisdiction. <br />

                        Furthermore, the registering party hereby acknowledges, understands and agrees to: <br />

                        a)	furnish factual, correct, current and complete information with regards to yourself as may be requested by the data registration process, and <br />
                        b)	maintain and promptly update your registration and profile information in an effort to maintain accuracy and completeness at all times. <br />

                        If anyone knowingly provides any information of a false, untrue, inaccurate or incomplete nature, QikDaw will have sufficient grounds and rights to suspend or terminate the member in violation of this aspect of the Agreement, and as such refuse any and all current or future use of QikDaw services, or any portion thereof. <br />

                        It is QikDaw’s priority to ensure the safety and privacy of all its visitors, users and members, especially that of children. Therefore, it is for this reason that the parents of any child under the age of 13 that permit their child or children access to the QikDaw website platform services must create a “family” account, which will certify that the individual creating the “family” account is of 18 years of age and as such, the parent or legal guardian of any child or children registered under the “family” account. As the creator of the “family” account, s/he is thereby granting permission for his/her child or children to access the various Services provided, including, but not limited to, message boards, email, and/or instant messaging. It is the parent’s and/or legal guardian’s responsibility to determine whether any of the Services and/or content provided are age appropriate for his/her child. <br />

                    </p>
                    <h6>PRIVACY POLICY</h6>
                    <p>
                        Every member’s registration data and various other personal information is strictly protected by the QikDaw Online Privacy Policy (see the full Privacy Policy at qikdaw.com/privacy_policy) As a member, you herein consent to the collection and use of the information provided, including the transfer of information within the United States and/or other countries for storage, processing or use by QikDaw and/or our subsidiaries and affiliates.
                    </p>
                    <h6>MEMBER ACCOUNT, USERNAME, PASSWORD AND SECURITY</h6>
                    <p>After completion of the registration data and creation of your username, you will receive a random password—which you can later change—and account designation. It shall be your responsibility to maintain the secrecy and confidentiality of your password and for all activities that transpire on or within your account. It shall be your responsibility to notify QikDaw immediately if you notice any unauthorized access or use of your account or password or any other breach of security. QikDaw shall not be held liable for any loss and/or damage arising from any failure to comply with this term and/or condition of the TOS.</p>
                    <h6>CONDUCT</h6>
                    <p>As a member of QikDaw you herein acknowledge, understand and agree that all information, text, software, data, photographs, music, video, messages, tags or any other content, whether it is publicly or privately posted and/or transmitted, is the expressed sole responsibility of the individual from whom the content originated. In short, this means that you are solely responsible for any and all content posted, uploaded, emailed, transmitted or otherwise made available by way of QikDaw Services, and as such, we do not guarantee the accuracy, integrity or quality of such content. It is expressly understood that by use of our Services, you may be exposed to content including, but not limited to, any errors or omissions in any content posted, and/or any loss or damage of any kind incurred as a result of the use of any content posted, emailed, transmitted or otherwise made available by QikDaw.</p>
                    <p>Furthermore, you herein agree not to make use of QikDaw’s Services for the purpose of:</p>
                    <p>(a)	uploading, posting, emailing, transmitting, or otherwise making available any content that shall be deemed unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, or invasive of another’s privacy or which is hateful, and/or racially, ethnically, or otherwise objectionable;</p>
                    <p>(b)	causing harm to minors in any manner whatsoever;</p>
                    <p>(c)	impersonating any individual or entity, including, but not limited to any QikDaw officials forum leaders, guides or hosts or falsely state or otherwise misrepresent any affiliation with an individual or entity;</p>
                    <p>(d)	forging captions, headings or titles or otherwise offer any content that you personally have no right to pursuant to any law nor having any contractual or fiduciary relationship with;</p>
                    <p>(e)	uploading, posting, emailing, transmitting or otherwise offering any such content that may infringe upon any patent, copyright, trademark, or any other proprietary or intellectual rights of any other party;</p>
                    <p>(f)	uploading, posting, emailing, transmitting or otherwise offering any content that you do not personally have any right to offer pursuant to any law or in accordance with any contractual or fiduciary relationship;</p>
                    <p>(g)	uploading, posting, emailing, transmitting, or otherwise offering any unsolicited or unauthorized advertising, promotional flyers, “junk mail,” “spam,” or any other form of solicitation, except in any such areas that may have been designated for such purpose;</p>
                    <p>(h)	uploading, posting, emailing, transmitting, or otherwise offering any source that may contain a software virus or other computer code, any files and/or programs which have been designed to interfere, destroy and/or limit the operation of any computer software, hardware, or telecommunication equipment;</p>
                    <p>(i)	disrupting the normal flow of communication, or otherwise acting in any manner that would negatively affect other users’ ability to participate in any real time interactions;</p>
                    <p>(j)	interfering with or disrupting any QikDaw Services, servers and/or networks that may be connected or related to our website, including but not limited to the use of any device software and/or routine to bypass the robot exclusion headers;</p>
                    <p>(k)	intentionally or unintentionally violating any local, state, federal, national or international law, including, but not limited to, rules, guidelines, and/or regulations decreed by the U.S. Securities and Exchange Commission, in addition to any rules of any nation or other securities exchange, that would include without limitation, the New York Stock Exchange, the American Stock Exchange, or the NASDAQ, and any regulations having the force of law;</p>
                    <p>
                        (l)	providing informational support or resources, concealing and/or disguising the character, location, and or source to any organization delegated by the United States government as a “foreign terrorist organization” in accordance to Section 219 of the Immigration Nationality Act;
                    </p>
                    <p>
                        (m)	“stalking” or with the intent to otherwise harass another individual; and/or
                    </p>
                    <p>
                        (n)	collecting or storing of any personal data relating to any other member or user in connection with the prohibited conduct and/or activities which have been set forth in the aforementioned paragraphs.
                    </p>
                    <p>
                        QikDaw herein reserves the right to pre-screen, refuse and/or delete any content currently available through our services. In addition, we reserve the right to remove and/or delete any such content that would violate the TOS or which would otherwise be considerable to other visitors, users and/or members.
                    </p>
                    <p>
                        (a)	compliance with any legal process; <br />

(b)	enforcement of the TOS; <br />

(c)	responding to any claim that therein contained content is in violation of the rights of any third party; <br />

(d)	responding to requests for customer service; or <br />

(e)	protecting the rights, property or the personal safety of QikDaw, its visitors, users and members, including the general public. <br />

                    </p>
                    <p>
                        QikDaw herein reserves the right to include the use of security components that may permit digital information or material to be protected, and that such use of information and/or material is subject to usage guidelines and regulations established by QikDaw or any other content providers supplying content services to QikDaw. You are hereby prohibited from making any attempt to override or circumvent any of the embedded usage rules in our Services. Furthermore, unauthorized reproduction, publication, distribution, or exhibition of any information or materials supplied by our Services, despite whether done so in whole or in part, is expressly prohibited.
                    </p>
                    <h6>INTERSTATE COMMUNICATION</h6>
                    <p>
                        Upon registration, you hereby acknowledge that by using QikDaw to send electronic communications, which would include, but are not limited to, email, searches, instant messages, uploading of files, photos and/or videos, you that you send through our network. Therefore, through your use, and thus your agreement with this TOS, you are acknowledging that the use of this Service shall result in interstate transmissions.
                    </p>
                    <h6>CONTENT PLACED OR MADE AVAILABLE FOR COMPANY SERVICES</h6>
                    <p>QikDaw shall not lay claim to ownership of any content submitted  by any visitor, user or member, nor make such content available for inclusion on our website services. Therefore, you hereby grant and allow for QikDaw the below listed worldwide, royalty-free and non-exclusive licenses, as applicable:</p>
                    <p>
                        (a)	The content submitted or made available for inclusion on the publicly accessible areas of QikDaw’s sites, the license provided to permit to use, distribute, reproduce, modify, adapt, publicly perform and/or publicly display said Content on our network services for the sole purpose of providing and promoting the specific area in which this content was placed and/or made available for viewing. This license shall be available so long as you are a member of QikDaw’s sites, and shall terminate at such time when you elect to discontinue your membership. <br />

                        (b)	Photos, audio, video and/or graphics submitted or made available for inclusion on the publicly accessible areas of QikDaw’s sites, the license provided to permit to use, distribute, reproduce, modify, adapt, publicly perform and/or publicly display said Content on our network services for the sole purpose of providing and promoting the specific area in which this content was placed and/or made available for viewing. This license shall be available so long as you are a member of QikDaw’s sites and shall terminate at such time when you elect to discontinue your membership. <br />

                        (c)	For any other content submitted or made available for inclusion on the publicly accessible areas of QikDaw’s sites, the continuous, binding and completely sub-licensable license which is meant to permit to use, distribute, reproduce, modify, adapt, publish, translate, publicly perform and/or publicly display said content, whether in whole or in part, and the incorporation of any such Content into other works in any arrangement or medium current used or later developed. <br />

                        Those areas which may be deemed “publicly accessible” areas of QikDaw’s sites are those such areas of our network properties which are meant to be available to the general public, and that which would include message boards and groups that are openly available to both visitors and members. However, those areas which are not open to the public, and thus available to members only, would include our mail system and instant messaging. <br />

                    </p>
                    <h6>CONTRIBUTIONS TO COMPANY WEBSITE</h6>
                    <p>QikDaw provides an area for our users and members to contribute feedback to our website. When you submit ideas, documents, suggestions and/or proposals (“Contributions”) to our site, you acknowledge and agree that: </p>
                    <p>
                        (a)	your Contributions do not contain any type of confidential or proprietary information; <br />

(b)	QikDaw shall not be liable or under any obligation to ensure or maintain confidentiality, expressed or implied, related to any Contributions;  <br />

(c)	QikDaw shall be entitled to make use of and/or disclose any such Contributions in any such manner as they may see fit; <br />

(d)	the contributor’s Contributions shall automatically become the sole property of QikDaw and <br />

(e)	QikDaw is under no obligation to either compensate or provide any form of reimbursement in any manner or nature. <br />

                    </p>
                    <h6>INDEMNITY</h6>
                    <p>
                        All users and/or members herein agree to insure and hold QikDaw, our subsidiaries, affiliates, agents, employees, officers, partners and/or licensors blameless or not liable for any claim or demand, which may include, but is not limited to, reasonable attorney fees, made by any third party which may arise from any content a member or user of our site may submit, post, modify, transmit or otherwise make available through our Services, the use of  QikDaw services or your connection with their services, your violations of the Terms of Service and/or your violation of any such rights of another person.
                    </p>
                    <h6>COMMERCIAL REUSE OF SERVICES</h6>
                    <p>The member or user herein agrees not to replicate, duplicate, copy, trade, sell, resell nor exploit for any commercial reason any part, use of, or access to QikDaw’s sites.</p>
                    <h6>USE AND STORAGE GENERAL PRACTICES</h6>
                    <p>
                        You herein acknowledge that QikDaw may set up any such practices and/or limits regarding the use of our Services, without limitation of the maximum number of days that any email, message postings or any other uploaded content shall be retained by QikDaw, nor the maximum number of email messages that may be sent and/or received by any member, the maximum volume or size of any email message that may be sent from or may be received by an account on our service, the maximum disk space allowable that shall be allocated on QikDaw’s servers on the member’s behalf, and/or the maximum number of times and/or duration that any member may access our Services in a given period of time.  In addition, you also agree that QikDaw has absolutely no responsibility or liability for the removal or failure to maintain storage of any messages and/or other communications or content maintained or transmitted by our Services. You also herein acknowledge that we reserve the right to delete or remove any account that is no longer active for an extended period of time. Furthermore, QikDaw shall reserve the right to modify, alter and/or update these general practices and limits at our discretion. <br />

Any messenger service, which may include any web-based versions, shall allow you and the individuals with whom you communicate with the ability to save your conversations in your account located on QikDaw’s servers. In this manner, you will be able to access and search your message history from any computer with internet access. You also acknowledge that others have the option to use and save conversations with you in their own personal account on QikDaw. It is your agreement to this TOS which establishes your consent to allow QikDaw to store any and all communications on its servers. <br />

                    </p>
                    <h6>MODIFICATIONS</h6>
                    <p>
                        QikDaw shall reserve the right at any time it may deem fit, to modify, alter and or discontinue, whether temporarily or permanently, our service, or any part thereof, with or without prior notice. In addition, we shall not be held liable to you or to any third party for any such alteration, modification, suspension and/or discontinuance of our Services, or any part thereof.
                    </p>
                    <h6>TERMINATION</h6>
                    <p>As a member of QikDaw, you may cancel or terminate your account, associated email address and/or access to our services by submitting a cancellation or termination request to service@gmail.com</p>
                    <p>As a member, you agree that QikDaw may, without any prior written notice, immediately suspend, terminate, discontinue and/or limit your account, any email associated with your account, and access to any of our Services. The cause for such termination, discontinuance, suspension and/or limitation of access shall include, but is not limited to:</p>
                    <p>
                        (a)	any breach or violation of our TOS or any other incorporated agreement, regulation and/or guideline; <br />

(b)	by way of requests from law enforcement or any other governmental agencies; <br />

(c)	the discontinuance, alteration and/or material modification to our Services, or any part thereof; <br />

(d)	unexpected technical or security issues and/or problems; <br />

(e)	any extended periods of activity; <br />

(f)	any engagement by you in any fraudulent or illegal activities; and/or <br />

(g)	the nonpayment of any associated fees that may be owed by you in connection with you QikDaw’s account services.  <br />

                    </p>
                    <p>
                    Furthermore, you herein agree that any and all terminations, suspensions, discontinuances, and or limitations of access for cause shall be made at our sole discretion and that we shall not be liable to you or any other third party with regards to the termination of your account, associated email address and/or access to any of our services.
                    </p>
                    <p>The termination of your account with QikDaw, shall include any and/or all of the following:</p>
                    <p>
                    (a)	the removal of any access to all or part of the Services offered within QikDaw; <br/>

(b)	the deletion of your password and any and all related information, files, and any such content that may be associated with or inside your account, or any part thereof; and <br/>

(c)	the barring of any further use of all or part of our Services. <br/>

                    </p>
                    <h6>ADVERTISERS</h6>
                    <p>
                    Any correspondence or business dealings with, or the participation in any promotions of, advertisers located on or through our Services, which may include the payment and/or delivery of such related goods and/or services, and any such other term, condition, warranty and/or representation associated with such dealings, are and shall be solely between you and any such advertiser. Moreover, you herein agree that QikDaw shall not be held responsible or liable for any loss or damage of any nature or manner incurred as a direct result of any such dealings or as a result of the presence of such advertisers on our website.
                    </p>
                    <h6>LINKS</h6>
                    <p>
                    Either QikDaw or any third parties, may provide links to other websites and/or resources. Thus, you acknowledge and agree that we are not responsible for the availability of any such external sites or resources, and as such, we do not endorse nor are we responsible or liable for any content, products, advertising or any other materials, on or available from such third party sites or resources. Furthermore, you acknowledge and agree that QikDaw shall not be responsible or liable, directly or indirectly, for any such damage or loss which may be a result of, caused or allegedly to be caused by or in connection with the use of or the reliance on any such content, goods or services made available on or through any such site or resource.
                    </p>
                    <h6>PROPRIETARY RIGHTS</h6>
                    <p>
                    You do hereby acknowledge and agree that the QikDaw’s Services and any essential software that may be used in connection with our services (“Software”) shall contain proprietary and confidential material that is protected by applicable intellectual property rights and other laws. Furthermore, you herein acknowledge and agree that any Content which may be contained in any advertisements or information presented by and through our services or by advertisers is protected by copyrights, trademarks, patents or other proprietary rights and laws. Therefore, except for that which is expressly permitted by applicable law or as authorized by QikDaw or such applicable licensor, you agree not to alter, modify, lease, rent, loan, sell, distribute, transmit, broadcast, publicly perform and/or created any plagiaristic works which are based on QikDaw Services (e.g. Content or Software), in whole or part.
                    </p>
                    <p>
                    QikDaw herein has granted you personal, non-transferable and non-exclusive rights and/or license to make use of the object code or its Software on a single computer, as long as you do not, and shall not, allow any third party to duplicate, alter, modify, create or plagiarize work from, reverse engineer, reverse assemble or otherwise make an attempt to locate or discern any source code, sell, assign, sublicense, grant a security interest in and/or otherwise transfer any such right in the Software. Furthermore, you do herein agree not to alter or change the Software in any manner, nature or form, and as such, not to use any modified versions of the Software, including and without limitation, for the purpose of obtaining unauthorized access to our Services. Lastly, you also agree not to access or attempt to access our Services through any means other than through the interface which is provided by QikDaw for use in accessing our Services.
                    </p>
                    <h6>LIMITATION OF LIABILITY</h6>
                    <p>
                    YOU EXPLICITY ACKNOWLEDGE, UNDERSTAND AND AGREE THAT [COMPANY_CONTACT_NAME_UC]  AND OUR SUBISDIARIES, AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS SHALL NOT BE LAIBLE TO YOU FOR ANY PUNITIVE, INDIRECT, INCIDENTIAL, SPECIAL, CONSEQUENIAL OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES WHICH MAY BE RELATED TO THE LOSS OF ANY PROFITS, GOODWILL, USE, DATA AND/OR OTHER INTANGILBE LOSSES, EVEN THOUGH WE MAY HAVE BEEN ADVISED OF SUCH POSSIBILITY THAT SAID DAMAGES MAY OCCUR, AND RESULT FROM:
                    </p>
                    <p>
                    (a)	THE USE OR INABILITY TO USE OUR SERVICE; <br/>

(b)	THE COST OF PRECURING SUBSTITUTE GOODS AND SERVICES; <br/>
 
(c)	UNAUTHORIZED ACCESS TO OR THE ALTERATION OF YOUR TRANSMISSIONS AND/OR DATA;  <br/>

(d)	STATEMENTS OR CONDUCT OF ANY SUCH THRID PARTY ON OUR SERVICE; <br/>

(e)	AND ANY OTHER MATTER WHICH MAY BE RELATED TO OUR SERVICE. <br/>

                    </p>
                    <h6>SPECIAL ADMONITION RELATED TO FINANCIAL MATTERS</h6>
                    <p>
                    Should you intend to create or to join any service, receive or request any such news, messages, alerts or other information from our Services concerning companies, stock quotes, investments or securities, please review the above Sections nineteen (19) and twenty (20) again. In addition, for this particular type of information, the phrase “Let the investor beware” is appropriate. QikDaw’s content is provided primarily for informational purposes, and no content that shall be provided or included in our services is intended for trading or investing purposes. QikDaw and our licensors shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted and/or made available by way of our services, and shall not be responsible or liable for any trading and/or investment decisions based on any such information.
                    </p>
                    <h6>THIRD PARTY BENEFICIARIES</h6>
                    <p>You herein acknowledge, understand and agree, unless otherwise expressly provided in this TOS, that there shall be third-party beneficiaries to this agreement.</p>
                    <h6>NOTICE</h6>
                    <p>
                    QikDaw may furnish you with notices, including those with regards to any changes to the TOS, including but not limited to email, regular mail, MMS or SMS, text messaging, postings on our website services, or other reasonable means currently known or any which may be herein after developed. Any such notices may not be received if you violate any aspects of the TOS by accessing our Services in an unauthorized manner. Your acceptance of this TOS constitutes your agreement that you are deemed to have received any and all notices that would have been delivered had you accessed our Services in an authorized manner.
                    </p>
                    <h6>TRADEMARK INFORMATION</h6>
                    <p>You herein acknowledge, understand and agree that all of QikDaw trademarks, copyright, trade name, service marks, and other QikDaw logos and any brand features, and/or product and service names are trademarks and as such, are and shall remain the property of QikDaw. You herein agree not to display and/or use in any manner the QikDaw logo or marks.</p>
                    <h6>
                    COPYRIGHT OR INTELLECTUAL PROPERTY INFRINGEMENT CLAIMS NOTICE & PROCEDURES
                    </h6>
                    <p>
                    QikDaw will always respect the intellectual property of others, and we ask that all of our users to the same. With regards to appropriate circumstances and at its sole discretion, QikDaw may disable and/or terminate the accounts of any user who repeatedly violates our TOS and/or infringes the rights of others. If you feel that your work has been duplicated in such a way that would constitute copyright infringement, or if you believe your intellectual property rights have been otherwise violated, you should provide to us the following information:
                    </p>
                    <p>
                    (a)	The electronic or the physical signature of the individual that is authorized on behalf of the owner of the copyright or other intellectual property interest; <br/>

(b)	A description of the copyrighted work or other intellectual property that you believe has been infringed upon; <br/>
 
(c)	A description of the location of the site which you allege has been infringing upon your work; <br/>

(d)	The physical address, telephone number, and email address; <br/>

(e)	A statement, in which you state that the alleged and disputed use of your work is not authorized by the copyright owner, its agents or the law; <br/>


(f)	And finally, a statement, made under penalty of perjury, that the aforementioned information in your notice is the truth and accurate, and that you are the copyright or intellectual property owner, representative or agent authorized to act on the copyright or intellectual property owner’s behalf. <br/>


                    </p>
                    <p>The QikDaw Agent for Notice of claims of copyright or other intellectual property infringement can be contacted as follows:</p>
                    <p>Mailing Address:</p>
                    <h6>GENERAL INFORMATION</h6>
                    <h6>ENTIRE AGREEMENT </h6>
                    <p>This TOS constitutes the entire agreement between you and QikDaw and shall govern the use of our Services, superseding any prior version of this TOS between you and us with respect to QikDaw Services. You may also be subject to additional terms and conditions that may apply when you use or purchase certain other QikDaw services, affiliate services, third-party content or third-party software.</p>
                    <h6>CHOICE OF LAW AND FORUM</h6>
                    <p>It is at the mutual agreement of both you and QikDaw with regard to the TOS that the relationship between the parties shall be governed by the laws of the QikDaw without regard to its conflict of law provisions and that any and all claims, causes of action and/or disputes, arising out of or relating to the TOS, or the relationship between you and QikDaw, shall be filed within the courts having jurisdiction within the County of Dallas or the U.S. District Court located in said state. You and QikDaw agree to submit to the jurisdiction of the courts as previously mentioned, and agree to waive any and all objections to the exercise of jurisdiction over the parties by such courts and to venue in such courts</p>
                    <h6>WAIVER AND SEVERABILITY OF TERMS</h6>
                    <p>
                    At any time, should QikDaw fail to exercise or enforce any right or provision of the TOS, such failure shall not constitute a waiver of such right or provision. If any provision of this TOS is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties’ intentions as reflected in the provision, and the other provisions of the TOS remain in full force and effect.
                    </p>
                    <h6>NO RIGHT OF SURVIVORSHIP NON-TRANSFERABILITY</h6>
                    <p>
                    You acknowledge, understand and agree that your account is non-transferable and any rights to your ID and/or contents within your account shall terminate upon your death. Upon receipt of a copy of a death certificate, your account may be terminated and all contents therein permanently deleted.
                    </p>
                    <h6>STATUTE OF LIMITATIONS</h6>
                    <p>
                    You acknowledge, understand and agree that regardless of any statute or law to the contrary, any claim or action arising out of or related to the use of our Services or the TOS must be filed within [STATUTE_OF_LIMITATIONS] years after said claim or cause of action arose or shall be forever barred.
                    </p>
                    <h6>VIOLATIONS</h6>
                    <p>Please report any and all violations of this TOS to QikDaw as follows:</p>
                    <p>Mailing Address: service@qikDaw.com</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Terms;