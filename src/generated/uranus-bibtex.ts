export const PAPERS = [
    {
        "name": "FreeWill: Automatically Diagnosing Use-after-free Bugs via Reference Miscounting Detection on Binaries (To Appear)",
        "authors": [
            {
                "name": "Liang He",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Liang+He"
            },
            {
                "name": "Hong Hu",
                "link": "https://huhong789.github.io"
            },
            {
                "name": "Purui Su",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Purui+Su"
            },
            {
                "name": "Yan Cai",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Yan+Cai"
            },
            {
                "name": "Zhenkai Liang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Zhenkai+Liang"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 31st USENIX Security Symposium (USENIX 2022)",
        "abstract": "Memory-safety issues in operating systems and popular applications are still top security threats. As one widely exploited vulnerability, Use After Free (UAF) resulted in hundreds of new incidents every year. Existing bug diagnosis techniques report the locations that allocate or deallocate the vulnerable object, but cannot provide sufficient information for developers to reason about a bug or synthesize a correct patch. \nIn this work, we identified incorrect reference counting as one common root cause of UAF bugs: if the developer forgets to increase the counter for a newly created reference, the program may prematurely free the actively used object, rendering other references dangling pointers. We call this problem reference miscounting. By proposing an omission- aware counting model, we developed an automatic method, FreeWill, to diagnose UAF bugs. FreeWill first reproduces a UAF bug and collects related execution trace. Then, it identifies the UAF object and related references. Finally, FreeWill compares reference operations with our model to detect reference miscounting. We evaluated FreeWill on 76 real-world UAF bugs and it successfully confirmed reference miscounting as root causes for 48 bugs and dangling usage for 18 bugs. FreeWill also identified five null-pointer dereference bugs and failed to analyze five bugs. FreeWill can complete its analysis within 15 minutes on average, showing its practicality for diagnosing UAF bugs.",
        "paperLink": "/assets/bibtex/he:freewill.pdf",
        "month": "August",
        "year": "2022",
        "bibtex": "@inproceedings{he:freewill,\n address = {Boston, MA},\n author = {Liang He and Hong Hu and Purui Su and Yan Cai and Zhenkai Liang},\n booktitle = {Proceedings of the 31st USENIX Security Symposium (USENIX 2022)},\n month = {August},\n title = {{FreeWill: Automatically Diagnosing Use-after-free Bugs via Reference Miscounting Detection on Binaries (To Appear)}},\n year = {2022}\n}\n\n"
    },
    {
        "name": "Cooper: Testing the Binding Code of Scripting Languages with Cooperative Mutation",
        "authors": [
            {
                "name": "Peng Xu",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Peng+Xu"
            },
            {
                "name": "Yanhao Wang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Yanhao+Wang"
            },
            {
                "name": "Hong Hu",
                "link": "https://huhong789.github.io"
            },
            {
                "name": "Purui Su",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Purui+Su"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 29th Annual Network and Distributed System Security Symposium (NDSS 2022)",
        "abstract": "Scripting languages like JavaScript are being integrated into commercial software to support easy file modification. For example, Adobe Acrobat accepts JavaScript to dynamically manipulate PDF files. To bridge the gap between the high-level scripts and the low-level languages (like C/C++) used to implement the software, a binding layer is necessary to transfer data and transform representations. However, due to the complexity of two sides, the binding code is prone to inconsistent semantics and security holes, which lead to severe vulnerabilities. Existing efforts for testing binding code merely focus on the script side, and thus miss bugs that require special program native inputs.\nIn this paper, we propose cooperative mutation, which modifies both the script code and the program native input to trigger bugs in binding code. Our insight is that many bugs are due to the interplay between the program initial state and the dynamic operations, which can only be triggered through two-dimensional mutations. We develop three novel techniques to enable practical cooperative mutation on popular scripting languages: we first cluster objects into semantics similar classes to reduce the mutation space of native inputs; then, we statistically infer the relationship between script code and object classes based on a large number of executions; at last, we use the inferred relationship to select proper objects and related script code for targeted mutation. We applied our tool, COOPER, on three popular systems that integrate scripting languages, including Adobe Acrobat, Foxit Reader and Microsoft Word. COOPER successfully found 134 previously unknown bugs. We have reported all of them to the developers. At the time of paper publishing, 59 bugs have been fixed and 33 of them are assigned CVE numbers. We are awarded totally 22K dollars bounty for 17 out of all reported bugs.",
        "paperLink": "/assets/bibtex/xu:cooper.pdf",
        "month": "April",
        "year": "2022",
        "githubLink": "https://github.com/TCA-ISCAS/Cooper",
        "githubStarsSvgLink": "https://img.shields.io/github/stars/TCA-ISCAS/Cooper.svg?style=social&label=Star&maxAge=2592000",
        "bibtex": "@inproceedings{xu:cooper,\n address = {San Diego, CA},\n author = {Peng Xu and Yanhao Wang and Hong Hu and Purui Su},\n booktitle = {Proceedings of the 29th Annual Network and Distributed System Security Symposium (NDSS 2022)},\n month = {April},\n title = {{Cooper: Testing the Binding Code of Scripting Languages with Cooperative Mutation}},\n www-url = {https://github.com/TCA-ISCAS/Cooper},\n year = {2022}\n}\n\n"
    },
    {
        "name": "Who Goes First? Detecting Go Concurrency Bugs via Message Reordering",
        "authors": [
            {
                "name": "Ziheng Liu*",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Ziheng+Liu*"
            },
            {
                "name": "Shihao Xia*",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Shihao+Xia*"
            },
            {
                "name": "Yu Liang",
                "link": "https://steveleungyl.github.io/"
            },
            {
                "name": "Linhai Song",
                "link": "https://songlh.github.io"
            },
            {
                "name": "Hong Hu",
                "link": "https://huhong789.github.io"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 27th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2022)",
        "abstract": "Go is a young programming language invented to build safe and efficient concurrent programs. It provides goroutines as lightweight threads and channels for inter-goroutine communication. Programmers are encouraged to explicitly pass messages through channels to connect goroutines, with the purpose of reducing the chance of making programming mistakes and introducing concurrency bugs. Go is one of the most beloved programming languages and has already been used to build many critical infrastructure software systems in the data-center environment. However, a recent study shows that channel-related concurrency bugs are still common in Go programs, severely hurting the reliability of Go applications.\nThis paper presents GFuzz, a dynamic detector that can effectively pinpoint channel-related concurrency bugs by mutating the processing orders of concurrent messages. We build GFuzz in three steps. We first adopt an effective approach to identify concurrent messages and transform a program to process those messages in any given order. We then take a fuzzing approach to generate new processing orders by mutating exercised ones and rely on execution feedback to prioritize orders close to triggering bugs. Finally, we design a runtime sanitizer to capture triggered bugs that are missed by the Go runtime. We evaluate GFuzz on seven popular Go software systems, including Docker, Kubernetes, and gRPC. GFuzz finds 184 previously unknown bugs and reports a negligible number of false positives. Programmers have already confirmed 124 reports as real bugs and fixed 67 of them based on our reporting. A careful inspection of the detected concurrency bugs from gRPC shows the effectiveness of each component of GFuzz and confirms the components\u2019 rationality.\n",
        "paperLink": "/assets/bibtex/liu:gfuzz.pdf",
        "month": "February--March",
        "year": "2022",
        "githubLink": "https://github.com/system-pclub/GFuzz",
        "githubStarsSvgLink": "https://img.shields.io/github/stars/system-pclub/GFuzz.svg?style=social&label=Star&maxAge=2592000",
        "slideLink": "/assets/bibtex/liu:gfuzz-slides.pdf",
        "bibtex": "@inproceedings{liu:gfuzz,\n address = {Lausanne, Switzerland},\n author = {Ziheng Liu* and Shihao Xia* and Yu Liang and Linhai Song and Hong Hu},\n booktitle = {Proceedings of the 27th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2022)},\n month = {February--March},\n title = {{Who Goes First? Detecting Go Concurrency Bugs via Message Reordering}},\n www-url = {https://github.com/system-pclub/GFuzz},\n year = {2022}\n}\n\n"
    },
    {
        "name": "Identifying Behavior Dispatchers for Malware Analysis",
        "authors": [
            {
                "name": "Kyuhong Park",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Kyuhong+Park"
            },
            {
                "name": "Burak Sahin",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Burak+Sahin"
            },
            {
                "name": "Yongheng Chen",
                "link": "https://changochen.github.io/"
            },
            {
                "name": "Jisheng Zhao",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Jisheng+Zhao"
            },
            {
                "name": "Evan Downing",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Evan+Downing"
            },
            {
                "name": "Hong Hu",
                "link": "https://huhong789.github.io"
            },
            {
                "name": "Wenke Lee",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Wenke+Lee"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 16th ACM ASIA Conference on Computer and Communications Security (AsiaCCS 2021)",
        "abstract": "Malware is a major threat to modern computer systems. Malicious behaviors are hidden by a variety of techniques: code obfuscation, message encoding and encryption, etc. Countermeasures have been developed to thwart these techniques in order to expose malicious behaviors. However, these countermeasures rely heavily on identifying specific API calls, which has significant limitations as these calls can be misleading or hidden from the analyst. In this paper, we show that malicious programs share a key component which we call a behavior dispatcher, a code structure which is intercepted between various condition checks and malicious actions. By identifying these behavior dispatchers, a malware analysis can be guided into behavior dispatchers and activate hidden malicious actions more easily.\nWe propose BDHunter, a system that automatically identifies dispatchers to assist triggering malicious behaviors. BDHunter takes advantage of the observation that a dispatcher compares an input with a set of expected values to determine which malicious behaviors to execute next. We evaluate BDHunter on recent malware samples to identify behavior dispatchers and show that these dispatchers can help trigger more malicious behaviors (otherwise hidden). Our experimental results show that BDHunter identifies 77.4% of dispatchers within the top 20 candidates discovered. Furthermore, BDHunter-guided concolic execution successfully triggers 13.0\u00d7 and 2.6\u00d7 more malicious behaviors, compared to unguided symbolic and concolic execution, respectively. These demonstrate that BDHunter effectively identifies behavior dispatchers, which are useful for exposing malicious behaviors.",
        "paperLink": "/assets/bibtex/park:bdhunter.pdf",
        "month": "June",
        "year": "2021",
        "githubLink": "https://github.com/kp2bit/bdhunter",
        "githubStarsSvgLink": "https://img.shields.io/github/stars/kp2bit/bdhunter.svg?style=social&label=Star&maxAge=2592000",
        "bibtex": "@inproceedings{park:bdhunter,\n address = {Hong Kong, China},\n author = {Kyuhong Park and Burak Sahin and Yongheng Chen and Jisheng Zhao and Evan Downing and Hong Hu and Wenke Lee},\n booktitle = {Proceedings of the 16th ACM ASIA Conference on Computer and Communications Security (AsiaCCS 2021)},\n month = {June},\n title = {{Identifying Behavior Dispatchers for Malware Analysis}},\n www-url = {https://github.com/kp2bit/bdhunter},\n year = {2021}\n}\n\n"
    },
    {
        "name": "Sharing More and Checking Less: Leaveraging Common Input Keywords to Detect Bugs in Embedded Systems",
        "authors": [
            {
                "name": "Libo Chen",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Libo+Chen"
            },
            {
                "name": "Yanhao Wang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Yanhao+Wang"
            },
            {
                "name": "Quanpu Cai",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Quanpu+Cai"
            },
            {
                "name": "Yunfan Zhan",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Yunfan+Zhan"
            },
            {
                "name": "Hong Hu",
                "link": "https://huhong789.github.io"
            },
            {
                "name": "Jiaqi Linghu",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Jiaqi+Linghu"
            },
            {
                "name": "Qinsheng Hou",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Qinsheng+Hou"
            },
            {
                "name": "Chao Zhang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Chao+Zhang"
            },
            {
                "name": "Haixin Duan",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Haixin+Duan"
            },
            {
                "name": "Zhi Xue",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Zhi+Xue"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 30th USENIX Security Symposium (USENIX 2021)",
        "abstract": "IoT devices have brought invaluable convenience to our daily life. However, their pervasiveness also amplifies the impact of security vulnerabilities. Many popular vulnerabilities of embedded systems reside in their vulnerable web services. Unfortunately, existing vulnerability detection methods cannot effectively nor efficiently analyze such web services: they either introduce heavy execution overheads or have many false positives and false negatives.\nIn this paper, we propose a novel static taint checking solution, SaTC, to effectively detect security vulnerabilities in web services provided by embedded devices. Our key insight is that, string literals on web interfaces are commonly shared between front-end files and back-end binaries to encode user input. We thus extract such common keywords from the front-end, and use them to locate reference points in the back-end, which indicate the input entry. Then, we apply targeted data-flow analysis to accurately detect dangerous uses of the untrusted user input. We implemented a prototype of SaTC and evaluated it on 39 embedded system firmwares from six popular vendors. SaTC discovered 33 unknown bugs, of which 30 are confirmed by CVE/CNVD/PSV. Compared to the state-of-the-art tool KARONTE, SaTC found significantly more bugs on the test set. It shows that, SaTC is effective in discovering bugs in embedded systems.",
        "paperLink": "/assets/bibtex/chen:satc.pdf",
        "month": "August",
        "year": "2021",
        "githubLink": "https://github.com/NSSL-SJTU/SaTC",
        "githubStarsSvgLink": "https://img.shields.io/github/stars/NSSL-SJTU/SaTC.svg?style=social&label=Star&maxAge=2592000",
        "slideLink": "/assets/bibtex/chen:satc-slides.pdf",
        "bibtex": "@inproceedings{chen:satc,\n address = {Vancouver, B.C., Canada},\n author = {Libo Chen and Yanhao Wang and Quanpu Cai and Yunfan Zhan and Hong Hu and Jiaqi Linghu and Qinsheng Hou and Chao Zhang and Haixin Duan and Zhi Xue},\n booktitle = {Proceedings of the 30th USENIX Security Symposium (USENIX 2021)},\n month = {August},\n title = {{Sharing More and Checking Less: Leaveraging Common Input Keywords to Detect Bugs in Embedded Systems}},\n www-url = {https://github.com/NSSL-SJTU/SaTC},\n year = {2021}\n}\n\n"
    },
    {
        "name": "Abusing Hidden Properties to Attack the Node.js Ecosystem",
        "authors": [
            {
                "name": "Feng Xiao",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Feng+Xiao"
            },
            {
                "name": "Jianwei Huang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Jianwei+Huang"
            },
            {
                "name": "Yichang Xiong",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Yichang+Xiong"
            },
            {
                "name": "Guangliang Yang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Guangliang+Yang"
            },
            {
                "name": "Hong Hu",
                "link": "https://huhong789.github.io"
            },
            {
                "name": "Guofei Gu",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Guofei+Gu"
            },
            {
                "name": "Wenke Lee",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Wenke+Lee"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 30th USENIX Security Symposium (USENIX 2021)",
        "abstract": "Nowadays, Node.js has been widely used in the development of server-side and desktop programs (e.g., Skype), with its cross-platform and high-performance execution environment of JavaScript. In past years, it has been reported other dynamic programming languages (e.g., PHP and Ruby) are unsafe on sharing objects. However, this security risk is not well studied and understood in JavaScript and Node.js programs.\nIn this paper, we fill the gap by conducting the first systematic study on the communication process between clientand server-side code in Node.js programs. We extensively identify several new vulnerabilities in popular Node.js programs. To demonstrate their security implications, we design and de- velop a novel feasible attack, named hidden property abusing (HPA). Our further analysis shows HPA attacks are subtly different from existing findings regarding exploitation and attack effects. Through HPA attacks, a remote web attacker may obtain dangerous abilities, such as stealing confidential data, bypassing security checks, and launching DoS (Denial of Service) attacks.\nTo help Node.js developers vet their programs against HPA, we design a novel vulnerability detection and verification tool, named LYNX, that utilizes hybrid program analysis to automatically reveal HPA vulnerabilities and even synthesize exploits. We apply LYNX on a set of widely-used Node.js programs and identify 15 previously unknown vulnerabilities. We have reported all of our findings to the Node.js community. 10 of them have been assigned with CVE, and 8 of them are rated as \u201cCritical\u201d or \u201cHigh\u201d severity. This indicates HPA attacks can cause serious security threats.",
        "paperLink": "/assets/bibtex/xiao:lynx.pdf",
        "month": "August",
        "year": "2021",
        "githubLink": "https://github.com/xiaofen9/Lynx",
        "githubStarsSvgLink": "https://img.shields.io/github/stars/xiaofen9/Lynx.svg?style=social&label=Star&maxAge=2592000",
        "slideLink": "/assets/bibtex/xiao:lynx-slides.pdf",
        "bibtex": "@inproceedings{xiao:lynx,\n address = {Vancouver, B.C., Canada},\n author = {Feng Xiao and Jianwei Huang and Yichang Xiong and Guangliang Yang and Hong Hu and Guofei Gu and Wenke Lee},\n booktitle = {Proceedings of the 30th USENIX Security Symposium (USENIX 2021)},\n month = {August},\n title = {{Abusing Hidden Properties to Attack the Node.js Ecosystem}},\n www-url = {https://github.com/xiaofen9/Lynx},\n year = {2021}\n}\n\n"
    },
    {
        "name": "Preventing Use-After-Free Attacks with Fast Forward Allocation",
        "authors": [
            {
                "name": "Brian Wickman",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Brian+Wickman"
            },
            {
                "name": "Hong Hu",
                "link": "https://huhong789.github.io"
            },
            {
                "name": "Insu Yun",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Insu+Yun"
            },
            {
                "name": "Daehee Jang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Daehee+Jang"
            },
            {
                "name": "JungWon Lim",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=JungWon+Lim"
            },
            {
                "name": "Sanidhya Kashyap",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Sanidhya+Kashyap"
            },
            {
                "name": "Taesoo Kim",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Taesoo+Kim"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 30th USENIX Security Symposium (USENIX 2021)",
        "abstract": "Memory-unsafe languages are widely used to implement critical systems like kernels and browsers, leading to thousands of memory safety issues every year. A use-after-free bug is a temporal memory error where the program accidentally visits a freed memory location. Recent studies show that useafter-free is one of the most exploited memory vulnerabilities. Unfortunately, previous efforts to mitigate use-after-free bugs are not widely deployed in real-world programs due to either inadequate accuracy or high performance overhead.\nIn this paper, we propose to resurrect the idea of one-time allocation (OTA) and provide a practical implementation with efficient execution and moderate memory overhead. With onetime allocation, the memory manager always returns a distinct memory address for each request. Since memory locations are not reused, attackers cannot reclaim freed objects, and thus cannot exploit use-after-free bugs. We utilize two techniques to render OTA practical: batch page management and the fusion of bump-pointer and fixed-size bins memory allocation styles. Batch page management helps reduce the number of system calls which negatively impact performance, while blending the two allocation methods mitigates the memory overhead and fragmentation issues. We implemented a prototype, called FFmalloc, to demonstrate our techniques. We evaluated FFmalloc on widely used benchmarks and real-world large programs. FFmalloc successfully blocked all tested useafter-free attacks while introducing moderate overhead. The results show that OTA can be a strong and practical solution to thwart use-after-free threats.",
        "paperLink": "/assets/bibtex/wickman:ffmalloc.pdf",
        "month": "August",
        "year": "2021",
        "githubLink": "https://github.com/bwickman97/ffmalloc",
        "githubStarsSvgLink": "https://img.shields.io/github/stars/bwickman97/ffmalloc.svg?style=social&label=Star&maxAge=2592000",
        "slideLink": "/assets/bibtex/wickman:ffmalloc-slides.pdf",
        "bibtex": "@inproceedings{wickman:ffmalloc,\n address = {Vancouver, B.C., Canada},\n author = {Brian Wickman and Hong Hu and Insu Yun and Daehee Jang and JungWon Lim and Sanidhya Kashyap and Taesoo Kim},\n booktitle = {Proceedings of the 30th USENIX Security Symposium (USENIX 2021)},\n month = {August},\n title = {{Preventing Use-After-Free Attacks with Fast Forward Allocation}},\n www-url = {https://github.com/bwickman97/ffmalloc},\n year = {2021}\n}\n\n"
    },
    {
        "name": "One Engine to Fuzz 'em All: Generic Language Processor Testing with Semantic Validation",
        "authors": [
            {
                "name": "Yongheng Chen",
                "link": "https://changochen.github.io/"
            },
            {
                "name": "Rui Zhong",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Rui+Zhong"
            },
            {
                "name": "Hong Hu",
                "link": "https://huhong789.github.io"
            },
            {
                "name": "Hangfan Zhang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Hangfan+Zhang"
            },
            {
                "name": "Yupeng Yang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Yupeng+Yang"
            },
            {
                "name": "Dinghao Wu",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Dinghao+Wu"
            },
            {
                "name": "Wenke Lee",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Wenke+Lee"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 42nd IEEE Symposium on Security and Privacy (Oakland 2021)",
        "abstract": "Language processors, such as compilers and interpreters, are indispensable in building modern software. Errors in language processors can lead to severe consequences, like incorrect functionalities or even malicious attacks. However, it is not trivial to automatically test language processors to find bugs. Existing testing methods (or fuzzers) either fail to generate high-quality (i.e., semantically correct) test cases, or only support limited programming languages.\nIn this paper, we propose POLYGLOT, a generic fuzzing framework that generates high-quality test cases for exploring processors of different programming languages. To achieve the generic applicability, POLYGLOT neutralizes the difference in syntax and semantics of programming languages with a uniform immediate representation (IR). To improve the language validity, POLYGLOT performs constrained mutation and semantic validation to preserve syntactic correctness and fix semantic errors. We have applied POLYGLOT on 21 popular language processors of 9 programming languages, and identified 173 new bugs, 113 of which are fixed with 18 CVEs assigned. Our experiments show that POLYGLOT can support a wide range of programming languages, and outperforms existing fuzzers with up to 30\u00d7 improvement in code coverage.",
        "paperLink": "/assets/bibtex/chen:polyglot.pdf",
        "month": "May",
        "year": "2021",
        "githubLink": "https://github.com/s3team/Polyglot",
        "githubStarsSvgLink": "https://img.shields.io/github/stars/s3team/Polyglot.svg?style=social&label=Star&maxAge=2592000",
        "bibtex": "@inproceedings{chen:polyglot,\n address = {San Francisco, CA},\n author = {Yongheng Chen and Rui Zhong and Hong Hu and Hangfan Zhang and Yupeng Yang and Dinghao Wu and Wenke Lee},\n booktitle = {Proceedings of the 42nd IEEE Symposium on Security and Privacy (Oakland 2021)},\n month = {May},\n title = {{One Engine to Fuzz 'em All: Generic Language Processor Testing with Semantic Validation}},\n www-url = {https://github.com/s3team/Polyglot},\n year = {2021}\n}\n\n"
    },
    {
        "name": "WINNIE: Fuzzing Windows Applications with Harness Synthesis and Fast Cloning",
        "authors": [
            {
                "name": "Jinho Jung",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Jinho+Jung"
            },
            {
                "name": "Stephen Tong",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Stephen+Tong"
            },
            {
                "name": "Hong Hu",
                "link": "https://huhong789.github.io"
            },
            {
                "name": "Jungwon Lim",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Jungwon+Lim"
            },
            {
                "name": "Yonghwi Jin",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Yonghwi+Jin"
            },
            {
                "name": "Taesoo Kim",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Taesoo+Kim"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 28th Annual Network and Distributed System Security Symposium (NDSS 2021)",
        "abstract": "Fuzzing is an emerging technique to automatically validate programs and uncover bugs. It has been widely used to test many programs and has found thousands of security vulnerabilities. However, existing fuzzing efforts are mainly centered around Unix-like systems, as Windows imposes unique challenges for fuzzing: a closed-source ecosystem, the heavy use of graphical interfaces and the lack of fast process cloning machinery.\nIn this paper, we propose two solutions to address the challenges Windows fuzzing faces. Our system, WINNIE, first tries to synthesize a harness for the application, a simple program that directly invokes target functions, based on sample executions. It then tests the harness, instead of the original complicated program, using an efficient implementation of fork on Windows. Using these techniques, WINNIE can bypass irrelevant GUI code to test logic deep within the application. We used WINNIE to fuzz 59 closed-source Windows executables, and it successfully generated valid fuzzing harnesses for all of them. In our evaluation, WINNIE can support 2.2\u00d7 more programs than existing Windows fuzzers could, and identified 3.9\u00d7 more program states and achieved 26.6\u00d7 faster execution. In total, WINNIE found 61 unique bugs in 32 Windows executables.",
        "paperLink": "/assets/bibtex/jung:winnie.pdf",
        "month": "February",
        "year": "2021",
        "githubLink": "https://github.com/sslab-gatech/winnie",
        "githubStarsSvgLink": "https://img.shields.io/github/stars/sslab-gatech/winnie.svg?style=social&label=Star&maxAge=2592000",
        "slideLink": "/assets/bibtex/jung:winnie-slides.pdf",
        "bibtex": "@inproceedings{jung:winnie,\n address = {Virtual},\n author = {Jinho Jung and Stephen Tong and Hong Hu and Jungwon Lim and Yonghwi Jin and Taesoo Kim},\n booktitle = {Proceedings of the 28th Annual Network and Distributed System Security Symposium (NDSS 2021)},\n month = {February},\n title = {{WINNIE: Fuzzing Windows Applications with Harness Synthesis and Fast Cloning}},\n www-url = {https://github.com/sslab-gatech/winnie},\n year = {2021}\n}\n\n"
    },
    {
        "name": "Beyond Bot Detection: Combating Fraudulent Online Survey Takers",
        "authors": [
            {
                "name": "Ziyi Zhang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Ziyi+Zhang"
            },
            {
                "name": "Shuofei Zhu",
                "link": "https://personal.psu.edu/suz305"
            },
            {
                "name": "Jaron Mink",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Jaron+Mink"
            },
            {
                "name": "Aiping Xiong",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Aiping+Xiong"
            },
            {
                "name": "Linhai Song",
                "link": "https://songlh.github.io"
            },
            {
                "name": "Gang Wang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Gang+Wang"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the ACM Web Conference 2022 (WWW 2022)",
        "month": "April",
        "year": "2022",
        "bibtex": "@inproceedings{zhang:www,\n address = {Lyon, France},\n author = {Ziyi Zhang and Shuofei Zhu and Jaron Mink and Aiping Xiong and Linhai Song and Gang Wang},\n booktitle = {Proceedings of the ACM Web Conference 2022 (WWW 2022)},\n month = {April},\n title = {{Beyond Bot Detection: Combating Fraudulent Online Survey Takers}},\n year = {2022}\n}\n\n"
    },
    {
        "name": "Learning and Programming Challenges of Rust: A Mixed-Methods Study (To Appear)",
        "authors": [
            {
                "name": "Shuofei Zhu*",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Shuofei+Zhu*"
            },
            {
                "name": "Ziyi Zhang*",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Ziyi+Zhang*"
            },
            {
                "name": "Boqin Qin",
                "link": "https://burtonqin.github.io/"
            },
            {
                "name": "Aiping Xiong",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Aiping+Xiong"
            },
            {
                "name": "Linhai Song",
                "link": "https://songlh.github.io"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 44th International Conference on Software Engineering (ICSE 2022)",
        "month": "May",
        "year": "2022",
        "bibtex": "@inproceedings{zhu:icse,\n address = {Pittsburgh, PA},\n author = {Shuofei Zhu* and Ziyi Zhang* and Boqin Qin and Aiping Xiong and Linhai Song},\n booktitle = {Proceedings of the 44th International Conference on Software Engineering (ICSE 2022)},\n month = {May},\n title = {{Learning and Programming Challenges of Rust: A Mixed-Methods Study (To Appear)}},\n year = {2022}\n}\n\n"
    },
    {
        "name": "Automatically Detecting and Fixing Concurrency Bugs in Go Software Systems",
        "authors": [
            {
                "name": "Ziheng Liu",
                "link": "https://lzhfromustc.github.io/"
            },
            {
                "name": "Shuofei Zhu",
                "link": "https://personal.psu.edu/suz305"
            },
            {
                "name": "Boqin Qin",
                "link": "https://burtonqin.github.io/"
            },
            {
                "name": "Hao Chen",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Hao+Chen"
            },
            {
                "name": "Linhai Song",
                "link": "https://songlh.github.io"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 26th ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2021)",
        "abstract": "Go is a statically typed programming language designed for efficient and reliable concurrent programming. For this purpose, Go provides lightweight goroutines and recommends passing messages using channels as a less error-prone means of thread communication. Go has become increasingly popular in recent years and has been adopted to build many important infrastructure software systems. However, a recent empirical study shows that concurrency bugs, especially those due to misuse of channels, exist widely in Go. These bugs severely hurt the reliability of Go concurrent systems. To fight Go concurrency bugs caused by misuse of channels, this paper proposes a static concurrency bug detection system, GCatch, and an automated concurrency bug fixing system, GFix. After disentangling an input Go program, GCatch models the complex channel operations in Go using a novel constraint system and applies a constraint solver to identify blocking bugs. GFix automatically patches blocking bugs detected by GCatch using Go\u2019s channel-related language features. We apply GCatch and GFix to 21 popular Go applications, including Docker, Kubernetes, and gRPC. In total, GCatch finds 149 previously unknown blocking bugs due to misuse of channels and GFix successfully fixes 124 of them. We have reported all detected bugs and generated patches to developers. So far, developers have fixed 125 blocking misuse-of-channel bugs based on our reporting. Among them, 87 bugs are fixed by applying GFix\u2019s patches directly.",
        "month": "April",
        "year": "2021",
        "githubLink": "https://github.com/system-pclub/GCatch",
        "githubStarsSvgLink": "https://img.shields.io/github/stars/system-pclub/GCatch.svg?style=social&label=Star&maxAge=2592000",
        "bibtex": "@inproceedings{liu:gcatch,\n address = {Virtual, USA},\n author = {Ziheng Liu and Shuofei Zhu and Boqin Qin and Hao Chen and Linhai Song},\n booktitle = {Proceedings of the 26th ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2021)},\n month = {April},\n title = {Automatically Detecting and Fixing Concurrency Bugs in Go Software Systems},\n www-url = {https://github.com/system-pclub/GCatch},\n year = {2021}\n}\n\n"
    },
    {
        "name": "Understanding Memory and Thread Safety Practices and Issues in Real-World Rust Programs",
        "authors": [
            {
                "name": "Boqin Qin*",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Boqin+Qin*"
            },
            {
                "name": "Yilun Chen*",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Yilun+Chen*"
            },
            {
                "name": "Zeming Yu",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Zeming+Yu"
            },
            {
                "name": "Linhai Song",
                "link": "https://songlh.github.io"
            },
            {
                "name": "Yiying Zhang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Yiying+Zhang"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 41st ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI 2020)",
        "abstract": "Rust is a young programming language designed for systems software development. It aims to provide safety guarantees like high-level languages and performance efficiency like low-level languages. The core design of Rust is a set of strict safety rules enforced by compile-time checking. To support more low-level controls, Rust allows programmers to bypass these compiler checks to write unsafe code. It is important to understand what safety issues exist in real Rust programs and how Rust safety mechanisms impact programming practices. We performed the first empirical study of Rust by close, manual inspection of 850 unsafe code usages and 170 bugs in five open-source Rust projects, five widely-used Rust libraries, two online security databases, and the Rust standard library. Our study answers three important questions: how and why do programmers write unsafe code, what memory-safety issues real Rust programs have, and what concurrency bugs Rust programmers make. Our study reveals interesting real-world Rust program behaviors and new issues Rust programmers make. Based on our study results, we propose several directions of building Rust bug detectors and built two static bug detectors, both of which revealed previously unknown bugs.",
        "month": "June",
        "year": "2020",
        "githubLink": "https://github.com/system-pclub/rust-study",
        "githubStarsSvgLink": "https://img.shields.io/github/stars/system-pclub/rust-study.svg?style=social&label=Star&maxAge=2592000",
        "bibtex": "@inproceedings{qin:rust-study,\n address = {London, UK},\n author = {Boqin Qin* and Yilun Chen* and Zeming Yu and Linhai Song and Yiying Zhang},\n booktitle = {Proceedings of the 41st ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI 2020)},\n month = {June},\n title = {Understanding Memory and Thread Safety Practices and Issues in Real-World Rust Programs},\n www-url = {https://github.com/system-pclub/rust-study},\n year = {2020}\n}\n\n"
    },
    {
        "name": "Measuring and Modeling the Label Dynamics of Online Anti-Malware Engines",
        "authors": [
            {
                "name": "Shuofei Zhu",
                "link": "https://personal.psu.edu/suz305"
            },
            {
                "name": "Jianjun Shi",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Jianjun+Shi"
            },
            {
                "name": "Limin Yang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Limin+Yang"
            },
            {
                "name": "Boqin Qin",
                "link": "https://burtonqin.github.io/"
            },
            {
                "name": "Ziyi Zhang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Ziyi+Zhang"
            },
            {
                "name": "Linhai Song",
                "link": "https://songlh.github.io"
            },
            {
                "name": "Gang Wang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Gang+Wang"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 29th USENIX Conference on Security Symposium (USENIX 2020)",
        "abstract": "VirusTotal provides malware labels from a large set of anti-malware engines, and is heavily used by researchers for malware annotation and system evaluation. Since different engines often disagree with each other, researchers have used various methods to aggregate their labels. In this paper, we take a data-driven approach to categorize, reason, and validate common labeling methods used by researchers. We first survey 115 academic papers that use VirusTotal, and identify common methodologies. Then we collect the daily snapshots of VirusTotal labels for more than 14,000 files (including a subset of manually verified ground-truth) from 65 VirusTotal engines over a year. Our analysis validates the benefits of threshold-based label aggregation in stabilizing files' labels, and also points out the impact of poorly-chosen thresholds. We show that hand-picked \"trusted\" engines do not always perform well, and certain groups of engines are strongly correlated and should not be treated independently. Finally, we empirically show certain engines fail to perform in-depth analysis on submitted files and can easily produce false positives. Based on our findings, we offer suggestions for future usage of VirusTotal for data annotation.",
        "month": "August",
        "year": "2020",
        "githubLink": "https://sfzhu93.github.io/projects/vt",
        "bibtex": "@inproceedings{zhu:usenix,\n address = {Virtual, USA},\n author = {Shuofei Zhu and Jianjun Shi and Limin Yang and Boqin Qin and Ziyi Zhang and Linhai Song and Gang Wang},\n booktitle = {Proceedings of the 29th USENIX Conference on Security Symposium (USENIX 2020)},\n month = {August},\n title = {Measuring and Modeling the Label Dynamics of Online Anti-Malware Engines},\n www-url = {https://sfzhu93.github.io/projects/vt},\n year = {2020}\n}\n\n"
    },
    {
        "name": "Opening the Blackbox of VirusTotal: Analyzing Online Phishing Scan Engines",
        "authors": [
            {
                "name": "Peng Peng",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Peng+Peng"
            },
            {
                "name": "Limin Yang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Limin+Yang"
            },
            {
                "name": "Linhai Song",
                "link": "https://songlh.github.io"
            },
            {
                "name": "Gang Wang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Gang+Wang"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 2019 Internet Measurement Conference (IMC 2019)",
        "abstract": "Online scan engines such as VirusTotal are heavily used by researchers to label malicious URLs and files. Unfortunately, it is not well understood how the labels are generated and how reliable the scanning results are. In this paper, we focus on VirusTotal and its 68 third-party vendors to examine their labeling process on phishing URLs. We perform a series of measurements by setting up our own phishing websites (mimicking PayPal and IRS) and submitting the URLs for scanning. By analyzing the incoming network traffic and the dynamic label changes at VirusTotal, we reveal new insights into how VirusTotal works and the quality of their labels. Among other things, we show that vendors have trouble flagging all phishing sites, and even the best vendors missed 30% of our phishing sites. In addition, the scanning results are not immediately updated to VirusTotal after the scanning, and there are inconsistent results between VirusTotal scan and some vendors' own scanners. Our results reveal the need for developing more rigorous methodologies to assess and make use of the labels obtained from VirusTotal.",
        "month": "October",
        "year": "2019",
        "bibtex": "@inproceedings{peng:imc,\n address = {Amsterdam, Netherlands},\n author = {Peng Peng and Limin Yang and Linhai Song and Gang Wang},\n booktitle = {Proceedings of the 2019 Internet Measurement Conference (IMC 2019)},\n month = {October},\n title = {Opening the Blackbox of VirusTotal: Analyzing Online Phishing Scan Engines},\n year = {2019}\n}\n\n"
    },
    {
        "name": "Understanding Real-World Concurrency Bugs in Go",
        "authors": [
            {
                "name": "Tengfei Tu",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Tengfei+Tu"
            },
            {
                "name": "Xiaoyu Liu",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Xiaoyu+Liu"
            },
            {
                "name": "Linhai Song",
                "link": "https://songlh.github.io"
            },
            {
                "name": "Yiying Zhang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Yiying+Zhang"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 24th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2019)",
        "abstract": "Go is a statically-typed programming language that aims to provide a simple, efficient, and safe way to build multi-threaded software. Since its creation in 2009, Go has matured and gained significant adoption in production and open-source software. Go advocates for the usage of message passing as the means of inter-thread communication and provides several new concurrency mechanisms and libraries to ease multi-threading programming. It is important to understand the implication of these new proposals and the comparison of message passing and shared memory synchronization in terms of program errors, or bugs. Unfortunately, as far as we know, there has been no study on Go's concurrency bugs. In this paper, we perform the first systematic study on concurrency bugs in real Go programs. We studied six popular Go software including Docker, Kubernetes, and gRPC. We analyzed 171 concurrency bugs in total, with more than half of them caused by non-traditional, Go-specific problems. Apart from root causes of these bugs, we also studied their fixes, performed experiments to reproduce them, and evaluated them with two publicly-available Go bug detectors. Overall, our study provides a better understanding on Go's concurrency models and can guide future researchers and practitioners in writing better, more reliable Go software and in developing debugging and diagnosis tools for Go.",
        "month": "April",
        "year": "2019",
        "githubLink": "https://github.com/system-pclub/go-concurrency-bugs",
        "githubStarsSvgLink": "https://img.shields.io/github/stars/system-pclub/go-concurrency-bugs.svg?style=social&label=Star&maxAge=2592000",
        "bibtex": "@inproceedings{tu:go-study,\n address = {Providence, RI},\n author = {Tengfei Tu and Xiaoyu Liu and Linhai Song and Yiying Zhang},\n booktitle = {Proceedings of the 24th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2019)},\n month = {April},\n title = {Understanding Real-World Concurrency Bugs in Go},\n www-url = {https://github.com/system-pclub/go-concurrency-bugs},\n year = {2019}\n}\n\n"
    },
    {
        "name": "Detecting Logical Bugs of DBMS with Coverage-based Guidance (To Appear)",
        "authors": [
            {
                "name": "Yu Liang",
                "link": "https://steveleungyl.github.io/"
            },
            {
                "name": "Song Liu",
                "link": "https://vancir.github.io/"
            },
            {
                "name": "Hong Hu",
                "link": "https://huhong789.github.io"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 31st USENIX Security Symposium (USENIX 2022)",
        "abstract": "Database management system (DBMS) is a critical component of modern data-intensive applications. Developers adopt many testing techniques to detect and fix DBMS bugs such as crashes and assertion failures. However, most of the previous efforts cannot detect logical bugs that render the DBMS returns incorrect results. Recent work proposed several oracles to identify incorrect results, but they rely on rule-based expression generation to synthesize queries without any guidance. In this paper, we propose to combine coverage-based guidance, validity-oriented mutations and oracles to detect logical bugs for DBMS systems. To achieve our goal, we first design a set of general APIs to decouple the logic of fuzzers and oracles, so that developers can easily port fuzzing tools to test DBMSs and write new oracles for existing fuzzers. We further provide validity-oriented mutations to generate high-quality query statements so as to find more logical bugs. Our prototype, SQLRight, outperforms existing tools that only rely on oracles or code coverage. It in total detects 18 logical bugs from three well-tested DBMSs, SQLite, PostgreSQL and MySQL. At the time of paper writing, all bugs have been confirmed and 13 of them are fixed.",
        "month": "aug",
        "year": "2022",
        "bibtex": "@inproceedings{liang:sqlright,\n address = {Boston, MA},\n author = {Yu Liang and Song Liu and Hong Hu},\n booktitle = {Proceedings of the 31st USENIX Security Symposium (USENIX 2022)},\n month = {aug},\n title = {{Detecting Logical Bugs of DBMS with Coverage-based Guidance (To Appear)}},\n year = {2022}\n}\n\n"
    },
    {
        "name": "SFuzz: Slice-based Fuzzing for Real-Time Operating Systems (To Appear)",
        "authors": [
            {
                "name": "Libo Chen",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Libo+Chen"
            },
            {
                "name": "Quanpu Cai",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Quanpu+Cai"
            },
            {
                "name": "Zhenbang Ma",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Zhenbang+Ma"
            },
            {
                "name": "Yanhao Wang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Yanhao+Wang"
            },
            {
                "name": "Hong Hu",
                "link": "https://huhong789.github.io"
            },
            {
                "name": "Minghang Shen",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Minghang+Shen"
            },
            {
                "name": "Yue Liu",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Yue+Liu"
            },
            {
                "name": "Shanqing Guo",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Shanqing+Guo"
            },
            {
                "name": "Haixin Duan",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Haixin+Duan"
            },
            {
                "name": "Kaida Jiang",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Kaida+Jiang"
            },
            {
                "name": "Zhi Xue",
                "link": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Zhi+Xue"
            }
        ],
        "authorExtra": "",
        "publicAt": "Proceedings of the 29th ACM Conference on Computer and Communications Security (CCS 2022)",
        "abstract": "Real-Time Operating System (RTOS) has become the main category of embedded systems. It is widely used to support tasks requiring real-time response such as printers and switches. The security of RTOS has been long overlooked as it was running in special environments isolated from attackers. However, with the rapid development of IoT devices, tremendous RTOS devices are connected to the public network. Due to the lack of security mechanisms, these devices are extremely vulnerable to a wide spectrum of attacks. Even worse, the monolithic design of RTOS combines various tasks and services into a single binary, which hinders the current program testing and analysis techniques working on RTOS systems. In this paper, we propose SFuzz, a novel slice-based fuzzer, to detect security vulnerabilities in RTOS systems. Our insight is that RTOS usually divides a complicated binary into many separated but single-minded tasks. Each task accomplishes a particular event in a deterministic way and its control flow is usually straightforward and independent. Therefore, we identify such code from the monolithic RTOS binary and synthesize a slice for effective testing. Specifically, SFuzz first identifies functions that handle user input, constructs call graphs that start from callers of these functions, and leverages forward slicing to build the execution tree based on the call graphs and pruning the paths independent of external inputs. Then, it detects roadblocks within the coarse-grain scope that hinders effective fuzzing, such as instructions unrelated to the user input. And then, it conducts coverage-guided fuzzing on these code snippets. Finally, SFuzz leverages forward and backward slicing to track and verify each path constraint and determine whether a bug discovered in the fuzzer is a real vulnerability. We applied SFuzz on 35 RTOS samples. SFuzz successfully discovered 77 zero-day bugs, and 67 of them have been assigned CVE or CNVD IDs. Our empirical evaluation shows that SFuzz outperforms the state-of-the-art tools (e.g., UnicornAFL) on testing RTOS.",
        "month": "nov",
        "year": "2022",
        "bibtex": "@inproceedings{chen:sfuzz,\n address = {Los Angeles, CA},\n author = {Libo Chen and Quanpu Cai and Zhenbang Ma and Yanhao Wang and Hong Hu and Minghang Shen and Yue Liu and Shanqing Guo and Haixin Duan and Kaida Jiang and Zhi Xue},\n booktitle = {Proceedings of the 29th ACM Conference on Computer and Communications Security (CCS 2022)},\n month = {nov},\n title = {{SFuzz: Slice-based Fuzzing for Real-Time Operating Systems (To Appear)}},\n year = {2022}\n}\n\n"
    }
]

export const PEOPLE = [
    {
        "name": "Linhai Song",
        "link": "https://songlh.github.io",
        "avatar": "/assets/song.png",
        "group": "Leaders",
        "desc": null
    },
    {
        "name": "Hong Hu",
        "link": "https://huhong789.github.io",
        "avatar": "https://huhong789.github.io/images/photo.jpg",
        "group": "Leaders",
        "desc": null
    },
    {
        "name": "Shuofei Zhu",
        "link": "https://personal.psu.edu/suz305",
        "avatar": "/assets/default-user.png",
        "group": "Graduate Students",
        "desc": null
    },
    {
        "name": "Yu Liang",
        "link": "https://steveleungyl.github.io/",
        "avatar": "/assets/yu.jpg",
        "group": "Graduate Students",
        "desc": null
    },
    {
        "name": "Shihao Xia",
        "link": "https://charlesxsh.github.io/",
        "avatar": "/assets/default-user.png",
        "group": "Graduate Students",
        "desc": null
    },
    {
        "name": "Hengkai Ye",
        "link": "https://hengkai-ye.github.io/",
        "avatar": "/assets/hengkai.jpg",
        "group": "Graduate Students",
        "desc": null
    },
    {
        "name": "Song Liu",
        "link": "https://vancir.github.io/",
        "avatar": "/assets/song.jpg",
        "group": "Graduate Students",
        "desc": null
    },
    {
        "name": "Shuangpeng Bai",
        "link": null,
        "avatar": "/assets/default-user.png",
        "group": "Graduate Students",
        "desc": null
    },
    {
        "name": "Mengting He",
        "link": null,
        "avatar": "/assets/default-user.png",
        "desc": null,
        "group": "Graduate Students"
    },
    {
        "name": "Ziheng Liu",
        "link": "https://lzhfromustc.github.io/",
        "avatar": "/assets/default-user.png",
        "group": "Alumni",
        "desc": [
            "(PhD, 2019-2021) -> PhD at UCSD"
        ]
    },
    {
        "name": "Boqin Qin",
        "link": "https://burtonqin.github.io/",
        "avatar": "/assets/default-user.png",
        "group": "Alumni",
        "desc": [
            "(Visiting PhD, 2018-2019) -> China Telecom Cloud Computing"
        ]
    },
    {
        "name": "Ziyi Zhang",
        "link": null,
        "avatar": "/assets/default-user.png",
        "group": "Alumni",
        "desc": [
            "PhD at UW-Madison"
        ]
    },
    {
        "name": "Jianjun Shi",
        "link": null,
        "avatar": "/assets/default-user.png",
        "group": "Alumni",
        "desc": [
            "(Visiting PhD, 2018-2019)"
        ]
    },
    {
        "name": "Zeming Yu",
        "link": null,
        "avatar": "/assets/default-user.png",
        "group": "Alumni",
        "desc": [
            "(2018-2019)"
        ]
    },
    {
        "name": "Yongheng Chen",
        "link": "https://changochen.github.io/",
        "avatar": "/assets/default-user.png",
        "group": "Alumni",
        "desc": [
            "(Visiting Undergraduate, 2019) -> PhD at Gatech"
        ]
    },
    {
        "name": "Tengfei Tu",
        "link": null,
        "avatar": "/assets/default-user.png",
        "group": "Alumni",
        "desc": [
            "(Visiting PhD, 2017-2018) -> Faculty at BUPT"
        ]
    }
]
    