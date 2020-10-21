var header=document.createElement("header")
    var div1=document.createElement("div")
    div1.setAttribute("id","first")

        var image=document.createElement("img")
        image.setAttribute("src","my_pic1.jpg")
        image.id="image"

        var div2=document.createElement("div")
        div2.setAttribute("id","name")

        var strong=document.createElement("strong")
        strong.innerHTML="GOMATHI J";

    div2.append(strong)

    div1.append(image,div2)

    var main=document.createElement("main")
    main.setAttribute("id","second")

        var main_div=document.createElement("div")
        main_div.setAttribute("id","address")

        main_div.innerHTML="Ooty,The Nilgiris | 8778714366 | gomathirengavilas@gmail.com";

    main.append(main_div)

header.append(div1,main)
    
    // console.log(header)

var table=document.createElement("table")
table.setAttribute("id","content")

    var tr=document.createElement("tr")

        var td1=document.createElement("td")
        td1.setAttribute("id","column1")

            var mat_icon1=document.createElement("span")
            mat_icon1.setAttribute("class","material-icons")
            mat_icon1.innerHTML="account_circle";

            var obj=document.createElement("h3")
            obj.setAttribute("class","head")
            obj.innerHTML="Objective";

            var obj_content=document.createElement("p")
            obj_content.innerHTML="To be the best in my own career through continuous learning and to utilize the best part of my knowledge in my own organization's progress that I join.Secure a responsible career opportunity to fully utilize my training and skill while making a significant contribution to the success of the company.";

        
            var mat_icon2=document.createElement("span")
            mat_icon2.setAttribute("class","material-icons")
            mat_icon2.innerHTML="card_giftcard";

            var skills=document.createElement("h3")
            skills.innerHTML="Skills";

            var tech_skills=document.createElement("h4")
            tech_skills.setAttribute("class","sub-head")
            tech_skills.innerHTML="Technical Skills";

            var tech_skill_list=document.createElement("ul")

                var item1=document.createElement("li")
                item1.innerHTML="Python";
                var item2=document.createElement("li")
                item2.innerHTML="R";
                var item3=document.createElement("li")
                item3.innerHTML="Machine Learning";
                var item4=document.createElement("li")
                item4.innerHTML="HTML";
                var item5=document.createElement("li")
                item5.innerHTML="CSS";
                var item6=document.createElement("li")
                item6.innerHTML="Excel";

            tech_skill_list.append(item1,item2,item3,item4,item5,item6)

            var add_skills=document.createElement("h4")
            add_skills.setAttribute("class","sub-head")
            add_skills.innerHTML="Addiitonal Skills";

            var add_skill_list=document.createElement("ul")

                var add_item1=document.createElement("li")
                add_item1.innerHTML="Problem Solving";
                var add_item2=document.createElement("li")
                add_item2.innerHTML="Teamwork";
                var add_item3=document.createElement("li")
                add_item3.innerHTML="Communication";

            add_skill_list.append(add_item1,add_item2,add_item3)

            var mat_icon3=document.createElement("span")
            mat_icon3.setAttribute("class","material-icons")
            mat_icon3.innerHTML="library_add";

            var project=document.createElement("h3")
            project.innerHTML="Projects";

            var project_list=document.createElement("ul")

                var proj_item1=document.createElement("li")

                    var proj_item1_content=document.createElement("p")
                    proj_item1_content.innerHTML="Image Classification using Convolutional Neural Network.";

                proj_item1.append(proj_item1_content)
            
            project_list.append(proj_item1)

        td1.append(mat_icon1,obj,obj_content,mat_icon2,skills,tech_skills,tech_skill_list,add_skills,add_skill_list,mat_icon3,project,project_list)

        var td2=document.createElement("td")
        td2.setAttribute("id","column2")

            var proj2_list=document.createElement("ul")

                var proj2_item1=document.createElement("li")
                    var proj2_item1_content=document.createElement("p")
                    proj2_item1_content.innerHTML="Loan status prediction, House price prediction,Flight Fare Prediction, Car price prediction using Machine Learning";
                proj2_item1 .append(proj2_item1_content) 
                
                var proj2_item2=document.createElement("li")  
                    var proj2_item2_content=document.createElement("p")
                    proj2_item2_content.innerHTML="Twitter Sentiment Analysis using NLP";
                proj2_item2.append(proj2_item2_content)

                var proj2_item3=document.createElement("li")  
                    var proj2_item3_content=document.createElement("p")
                    proj2_item3_content.innerHTML="Text Summarization";
                proj2_item3.append(proj2_item3_content)

                var proj2_item4=document.createElement("li")  
                    var proj2_item4_content=document.createElement("p")
                    proj2_item4_content.innerHTML="Bulit Multisensory Sports Foul Intimator For Persons With Disabilities.";
                proj2_item4.append(proj2_item4_content)
            
            proj2_list.append(proj2_item1,proj2_item2,proj2_item3,proj2_item4)

            var mat_icon4=document.createElement("span")
            mat_icon4.setAttribute("class","material-icons")
            mat_icon4.innerHTML="menu_book";

            var edu_details=document.createElement("h3")
            edu_details.innerHTML="Education";

            var edu_list=document.createElement("ul")

                var edu_item1=document.createElement("li")
                edu_item1.innerHTML="Bachelor of Science,Mathematics";

                var edu_item2=document.createElement("li")
                edu_item2.innerHTML="Persuing Masters Of Science,Data Analytics";

            edu_list.append(edu_item1,edu_item2)

            var mat_icon5=document.createElement("span")
            mat_icon5.setAttribute("class","material-icons")
            mat_icon5.innerHTML="emoji_events";

            var certificates=document.createElement("h3")
            certificates.innerHTML="Certifications";

            var certificates_head1=document.createElement("h4")
            certificates_head1.innerHTML="Completed certificate courses from IIT Roorkee in"

            var certificate_list1=document.createElement("ul")

                var cert_item1=document.createElement("li")
                cert_item1.innerHTML="Python";

                var cert_item2=document.createElement("li")
                cert_item2.innerHTML="Machine Learning";

                var cert_item3=document.createElement("li")
                cert_item3.innerHTML="Deep Learning";

            certificate_list1.append(cert_item1,cert_item2,cert_item3)

            var certificates_head2=document.createElement("h4")
            certificates_head2.innerHTML="Completed certificate courses from Udemy in"

            var certificate_list2=document.createElement("ul")

                var cert_item11=document.createElement("li")
                cert_item11.innerHTML="Natural Language Processing";

                var cert_item12=document.createElement("li")
                cert_item12.innerHTML="R";

            certificate_list2.append(cert_item11,cert_item12)

        td2.append(proj2_list,mat_icon4,edu_details,edu_list,mat_icon5,certificates,certificates_head1,certificate_list1,certificates_head2,certificate_list2)

    tr.append(td1,td2)

table.append(tr)

document.body.append(header,table)









                    