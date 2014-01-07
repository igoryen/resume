			// vars 
			var objctv1 = "To secure an IT position in a dynamic organization where I can contribute my technical knowledge and my project management skills";

			var objctv2 = "To obtain a challenging and rewarding web developer position where I can utilize my knowledge, proficiency, and skills to contribute to a company's growth";

			var fullname = "igor entaltsev";
			var address = "102-2980, Don Mills Rd, North York, ON, M2J 3B9";
			var phone = "647-703-6200";
			var email = "igor.yentaltsev@gmail.com";

			// arrays

			var highlights = [
				"Passionate about web development, committed to continuous learning and skill development",
				"Quality-oriented, tenacious, self-motivated, committed to teamwork, success-oriented hard worker", 
				"Multicultural experience, knowledge of several languages (Russian, Mandarin, German)"
			];
			var volun = [
				"Effectively and knowledgeably supervised a staff of 8 teachers at a church Youth Department. On departure, was repeatedly asked to return because of good performance",
				"Designed and manufactured theatrical scenery for a community theater production",
				"Assisted in humanitarian aid distribution in the community during an economic crisis"
			];

			var hobby = [
				"Teaching myself technology (IT, web development and design, automated translation)",
				"Teaching myself languages (Chinese, Latin, Hebrew)",
				"Teaching myself music (drums, guitar)"
			];

			var achiev = [
				"Raised my children bilingual (English and Russian)",
				"Created my own Teach-Yourself-English curriculum"
			];


			// objects

			var tskills = {
				name: "tskills",
			  1: {
			  	cat: "operating system",
					names: "Windows 8/7/XP, OS X, UNIX/Linux, IBM AS/400"
				},
				2: {
					cat: "programming",
					names: "Node.js, Git, HTML5, CSS, JavaScript, JQuery, regex, C#, ASP.NET MVC4, PHP, C, C++, Java, COBOL, unit testing, shell scripting, website hosting"
				},
				3: {
					cat: "database",
					names: "SQL, MySQL, Oracle's SQL*Plus, RPG, DB2"
				},
				4: {
					cat: "software",
					names: "Sublime Text, Eclipse, NetBeans, Comodo, Microsoft Visual Studio, Microsoft Windows Server 2008, Apache Server, Rational Rose modeling tool (with UML), IBM Rational Developer for Power Systems Software (RDP), Oracle RDBMS, MS Office, Libre Office"
				}
			};

			var edu = {
				name: "edu",
				1 : {
					name: "Computer Programming Co-op Diploma",
					time: "May 2011 - December 2013",
					place: "Seneca College of Applied Arts and Technology, Toronto, ON"
				},
				2: {
					name: "Certificate in Teaching English to Adults",
					time: "October - November 2007",
					place: "Language Link, Beijing, China",
					// details: {
					// 	1: "Certificate awarded by Cambridge Educational Services Overseas Limited"
					// }
				},
				3: {
					name: "5-Year Diploma in Teaching English and German",
					time: "September 1993 - June 1998",
					place: "Sochi State University, Sochi, Russia",
				},
				4: {
					name: "Certificate in Fine Arts",
					time: "September 1986 - May 1990",
					place: "Adler School of Fine Arts, Sochi, Russia"
				}
			};

			var exp = {
				name: "exp",
				1: {
					name: "research assistant - web developer",
					time: "may 2013 - december 2013",
					place: "Seneca's Centre for Development of Open Technology (Co-op position)",
					details: {
						1: "Provided localization and translation for Mozilla's web-based tools - Webmaker.org and TogetherJSoth - both built in Node.js. Localized the tools into more than 60 languages which helped Mozilla expand internationally" 
					}
				},
				2: {
					name: "Teacher of English as a Second Language",
					time: "February 2008 - July 2010",
					place: "Heilongjiang EEC Institute and Caree Sunshine School, Harbin, China",
					details: {
						1: "Developed a new original teaching methodology that significantly increased academic progress; improved and adapted old curriculum; demystified laws of learning language to beginners"
					}
				},
				3: {
					name: "Manager of Youth Services",
					time: "March 2002 - May 2006",
					place: "Calvary Chapel Church, Sochi, Russia",
					details: {
						1: "Pioneered two new departments which  helped expand services and increase membership",
						2: "Organized, oversaw, trained and coordinated six 15-strong teams",
						3: "Authored a new teaching curriculum and produced instructional CD's; translated a documentary from English into Russian; created a website for a Chinese doctor and author"
					}
				},
				4: {
					name: "Hotel Manager Assistant",
					time: "May 2001 - October 2002",
					place: "AdlerKurort, Sochi, Russia",
					details: {
						1: "Supervised the work of a staff of 40 people; arranged foreign visitors visa registration",
						2:	"Created a user manual to help non-technical staff learn how to use the public address and alarm system",
						3:	"Managed the first impressions of the company and of its brand; reconciled customer complaints"
					}
				},
				5: {
					name: "Teacher",
					time: "September 1998 - July 2000",
					place: "The International School Of Tomorrow, Sochi, Russia",
					details: {
						1: "Taught three elementary school courses; made one course more attractive to students; prepared weekly reports; provided translation services", 
						2: "Made a Russian translation of a multi-volume school curriculum"
					}
				},
				6: {
					name: "Translator",
					time: "September 1995 - December 1996",
					place: "The C&T Publishing Company, Sochi, Russia",
					details: {
						1: "Improved the company's international correspondence and interpreted at meetings"
					}
				}
			};

			var proja = { // proja = project academic
				name: "proja",
				1: {
					name: "Web-based Inventory Management System",
					desc: "using PHP, HTML5, CSS, created a website for an online store on Apache Server that allowed users to securely login using encrypted passwords, to get the forgotten password hint in an email, to view, add, delete and edit records in the database using SQL queries and validation via regular expressions, and providing for SQL injection and cross-site scripting."
				},
				2: {
					name: "Online Store Order Page",
					desc: "using HTML5, CSS created a web page on a Linux server that allowed users to order a product online featuring fields validation using JavaScript"
				},
				3: {
					name: "Construction Projects Maintenance Program",
					desc: "using COBOL language designed and wrote a program on IBM i-Series server for user to view, search, add, delete, and edit records in a database file, as well as to create and print out project summary reports"
				},
				4: {
					name: "Physical and Conceptual Database Design",
					desc: "based upon an example company’s reports, invoice, and description of operations, developed an Entity Relationship Diagram, performed normalizations, prepared physical database descriptions, and created a relational DB2 database"
				}	
			}

			var proj = {
				name: "proj",
				1: {
					name: "Mozilla Webmaker",
					desc: "a website built on Node.js intended to teach web literacy for free. Includes an in-browser HTML editor and a video-editor to create and/or remix and share web pages and videos, as well as a plugin to discover and learn DOM elements on a web page."
				},
				2: {
					name: "Mozilla TogetherJS",
					desc: "a free, open source JavaScript library by Mozilla that adds collaboration features and tools to any website. By adding TogetherJS to the site, its users can help each other out on a website in real time."
				}
			}
				
			// functions declarations and invocations

			var dispenser = function(obj, title){

				// lay tracks for title
				var div_title = document.createElement("div");
				div_title.id = obj.name + "title";
				div_title.className = "main_item";
				document.getElementById(obj.name).appendChild(div_title); // edu/edutitle
				document.getElementById(obj.name + "title").innerHTML = "<hr>" + title;

				for (var no=1; no < Object.keys(obj).length; no++){

					var div_row = document.createElement("div");
					div_row.id = obj.name + no + "row";
					div_row.className = "row";
					document.getElementById(obj.name).appendChild(div_row); // edu/edu1row

					//document.getElementById(obj.name + no + "name").innerHTML = "aaaaaa";
					if (obj[no].hasOwnProperty("name")){
					
						var div_name = document.createElement("div");
						div_name.id = obj.name + no + "name";
						div_name.className = "cell sub_main_item wide2thirds";
						document.getElementById(obj.name + no + "row").appendChild(div_name); // edu1row/edu1name
						//console.log("in name: "+ obj.name + no+"name");
						document.getElementById(obj.name + no + "name").innerHTML = obj[no].name;
					}
					if (obj[no].hasOwnProperty("time")){
						//console.log("in time: "+ obj.name + no);	
						var div_time = document.createElement("div");
						div_time.id = obj.name + no + "time";
						div_time.className = "cell sub_main_item wide1third";
						document.getElementById(obj.name + no + "row").appendChild(div_time); // edu1row/edu1time
						document.getElementById(obj.name + no + "time").innerHTML = obj[no].time;
					}
					
					if (obj[no].hasOwnProperty("place")){

						var div_place = document.createElement("div");
						div_place.id = obj.name + no + "place";
						div_place.className = "row";
						document.getElementById(obj.name).appendChild(div_place); // edu/edu1place

						console.log("in place: "+ obj.name + no);
						document.getElementById(obj.name + no + "place").innerHTML = obj[no].place;
					}
					if (obj[no].hasOwnProperty("details")){
						var div_details = document.createElement("div");
						div_details.id = obj.name + no + "details";
						div_details.className = "row indented";
						document.getElementById(obj.name).appendChild(div_details); // edu/edu1details
							//console.log(obj[no].hasOwnProperty("details"));
						var bag ="";
							//console.log(Object.keys(obj[no].details).length);
						for (var i=1; i <= Object.keys(obj[no].details).length; i++){
							bag += "<li>"
								//console.log(obj[no].details[i]);
						  bag += obj[no].details[i];
						  bag += "</li>";
						} // for
						document.getElementById(obj.name + no + "details").innerHTML = bag;
					} // if

					if (obj[no].hasOwnProperty("desc")){
						console.log("in time: "+ obj.name + no);						
						document.getElementById(obj.name + no + "desc").innerHTML = obj[no].time;
					}

				} // for
			} // dispenser()

			dispenser(edu, "education");
			dispenser(exp, "work experience");

			var dispenserForProj = function(obj, title){ // title = string for title
				//console.log(obj.name + 1 + "name");
				//console.log(Object.keys(obj).length);

				var div_proj_title = document.createElement("div");
				div_proj_title.id = obj.name + "title";
				div_proj_title.className = "main_item";
				document.getElementById(obj.name).appendChild(div_proj_title); // div proj / div proj title
				document.getElementById(obj.name + "title").innerHTML = "<hr>" + title;


				var len = Object.keys(obj).length;
				for (var no=1; no < len; no++){
					//document.getElementById(obj.name + no + "name").innerHTML = "aaaaaa";
					var bag = "";
					var div_proj = document.createElement("div"); // create a "div" element for a question
					div_proj.id = obj.name + no; // give it an "id" - proj1
											console.log("in for: " + div_proj.id);

					div_proj.className = "padded"; // give it a "class"
											console.log("in for: " + obj.name);

					document.getElementById(obj.name).appendChild(div_proj); // append it to div with id=questions
					bag = "<b>" + obj[no].name + ":</b> " + obj[no].desc; 
					//console.log("id: "+ obj.name + no);
					document.getElementById(obj.name + no).innerHTML = bag;
				}	// for
			} // dispenser()

			dispenserForProj(proj, "projects");
			dispenserForProj(proja, "academic projects");


			var dispenserForSkills = function(obj, title){ // title = string for title
				// lay the rails for "title"
				var div_skills_title = document.createElement("div");
				div_skills_title.id = obj.name + "title"; // skills_t
				div_skills_title.className = "main_item";
				document.getElementById(obj.name).appendChild(div_skills_title); // div proj / div proj title
				// send the train on the rails
				document.getElementById(obj.name + "title").innerHTML = "<hr>" + title;


				var len = Object.keys(obj).length;

				for (var no=1; no < len; no++){
					// lay the tracks for row for 1 and 2
					var div_skill = document.createElement("div"); // create a "div" element for a question
					div_skill.id = obj.name + no; // give it an "id" - tskill1
					div_skill.className = "row"; // give it a "class"
					document.getElementById(obj.name).appendChild(div_skill); // append it to div with id=questions
					// lay the tracks for 1
					var div_skill_cat = document.createElement("div");
					div_skill_cat.id = obj.name + no + "cat";
					div_skill_cat.className = "cell wide1fourth sub_main_item";
					document.getElementById(obj.name + no).appendChild(div_skill_cat);
					// lay the tracks for 2
					var div_skill_names = document.createElement("div");
					div_skill_names.id = obj.name + no + "names";
					div_skill_names.className = "cell wide3fourths";
					document.getElementById(obj.name + no).appendChild(div_skill_names);
					// send the train on 1 and 2
					document.getElementById(obj.name + no + "cat").innerHTML = obj[no].cat;
					document.getElementById(obj.name + no + "names").innerHTML = obj[no].names;
				}	// for
			} // dispenser()

			dispenserForSkills(tskills, "technical skills");

			var linemaker = function(cont, id, title){ // var, id, "title"
					
				var div_line_title = document.createElement("div"); // create a "div" element for a question
				div_line_title.id = id + "_title"; // give it an "id" - tskill1
				div_line_title.className = "main_item"; // give it a "class"
									//console.log(id);
				console.log("div_line_title :" + div_line_title);
					//document.getElementById(id).innerHTML = "aaa";
				document.getElementById(id).appendChild(div_line_title);
				document.getElementById(id + "_title").innerHTML = "<hr>" + title;
				//document.getElementById(id + "_title").innerHTML = "<hr>" + "title";

				var div_line_cont = document.createElement("div"); // create a "div" element for a question
				div_line_cont.id = id + "cont"; // give it an "id" - tskill1
				//div_line.className = "main_item"; // give it a "class"
				document.getElementById(id).appendChild(div_line_cont);
									console.log(div_line_cont);
				document.getElementById(id + "cont").innerHTML = cont;
			}

			linemaker(objctv2, "objective", "objective");

			var listmaker = function(ary, idr, title){ // volun, "volun", "volunteer experience"

				var div_list_title = document.createElement("div");
				div_list_title.id = idr + "title"; // "volun"
				div_list_title.className = "main_item";
				document.getElementById(idr).appendChild(div_list_title);
				document.getElementById(idr + "title").innerHTML = "<hr>" + title;


				for (var i = 0; i < ary.length; i++){
					var bag = "";
					var div_list_item = document.createElement("div");
					div_list_item.id = idr + i;
					document.getElementById(idr).appendChild(div_list_item);
					//console.log(ary.length);
					bag = "<li>"+ ary[i] + "</li>";
					document.getElementById(idr + i).innerHTML = bag;	
				}
			}

			listmaker(highlights, "highlights", "highlights of qualifications");
			listmaker(hobby, "hobby", "interests and activities");
			listmaker(volun, "volun", "volunteer experience");
			listmaker(achiev, "achiev", "achievements");
			
			
			document.getElementById("full_name").innerHTML = fullname;
			document.getElementById("address").innerHTML = address + " &bull; " + phone + " &bull; " + email;
			

			