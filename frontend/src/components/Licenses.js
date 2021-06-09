import Accordion from './Accordion/Accordion';

function Licenses({ className }) {
	return (
		<div className={className}>
			<h1 className='text-center mt-5'>Licenses</h1>
			<div>
				<h2>Frontend:</h2>
				<Accordion className='m-3 card bg-light' title='Axios'>
					Copyright (c) 2014-present Matt Zabriskie

					Permission is hereby granted, free of charge, to any person obtaining a copy
					of this software and associated documentation files (the "Software"), to deal
					in the Software without restriction, including without limitation the rights
					to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
					copies of the Software, and to permit persons to whom the Software is
					furnished to do so, subject to the following conditions:

					The above copyright notice and this permission notice shall be included in
					all copies or substantial portions of the Software.

					THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
					IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
					FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
					AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
					LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
					OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
					THE SOFTWARE.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='Bootstrap'>
					The MIT License (MIT)

					Copyright (c) 2011-2021 Twitter, Inc.
					Copyright (c) 2011-2021 The Bootstrap Authors

					Permission is hereby granted, free of charge, to any person obtaining a copy
					of this software and associated documentation files (the "Software"), to deal
					in the Software without restriction, including without limitation the rights
					to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
					copies of the Software, and to permit persons to whom the Software is
					furnished to do so, subject to the following conditions:

					The above copyright notice and this permission notice shall be included in
					all copies or substantial portions of the Software.

					THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
					IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
					FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
					AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
					LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
					OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
					THE SOFTWARE.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='Nodejs'>
					Node.js is licensed for use as follows:

					"""
					Copyright Node.js contributors. All rights reserved.

					Permission is hereby granted, free of charge, to any person obtaining a copy
					of this software and associated documentation files (the "Software"), to
					deal in the Software without restriction, including without limitation the
					rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
					sell copies of the Software, and to permit persons to whom the Software is
					furnished to do so, subject to the following conditions:

					The above copyright notice and this permission notice shall be included in
					all copies or substantial portions of the Software.

					THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
					IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
					FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
					AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
					LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
					FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
					IN THE SOFTWARE.
					"""

					This license applies to parts of Node.js originating from the
					https://github.com/joyent/node repository:

					"""
					Copyright Joyent, Inc. and other Node contributors. All rights reserved.
					Permission is hereby granted, free of charge, to any person obtaining a copy
					of this software and associated documentation files (the "Software"), to
					deal in the Software without restriction, including without limitation the
					rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
					sell copies of the Software, and to permit persons to whom the Software is
					furnished to do so, subject to the following conditions:

					The above copyright notice and this permission notice shall be included in
					all copies or substantial portions of the Software.

					THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
					IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
					FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
					AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
					LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
					FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
					IN THE SOFTWARE.
					"""

					The Node.js license applies to all parts of Node.js that are not externally
					maintained libraries.

					The externally maintained libraries used by Node.js are:

					- Acorn, located at deps/acorn, is licensed as follows:
					"""
						MIT License

						Copyright (C) 2012-2018 by various contributors (see AUTHORS)

						Permission is hereby granted, free of charge, to any person obtaining a copy
						of this software and associated documentation files (the "Software"), to deal
						in the Software without restriction, including without limitation the rights
						to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
						copies of the Software, and to permit persons to whom the Software is
						furnished to do so, subject to the following conditions:

						The above copyright notice and this permission notice shall be included in
						all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
						IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
						FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
						AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
						LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
						OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
						THE SOFTWARE.
					"""

					- Acorn plugins, located at deps/acorn-plugins, is licensed as follows:
					"""
						Copyright (C) 2017-2018 by Adrian Heine

						Permission is hereby granted, free of charge, to any person obtaining a copy
						of this software and associated documentation files (the "Software"), to deal
						in the Software without restriction, including without limitation the rights
						to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
						copies of the Software, and to permit persons to whom the Software is
						furnished to do so, subject to the following conditions:

						The above copyright notice and this permission notice shall be included in
						all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
						IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
						FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
						AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
						LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
						OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
						THE SOFTWARE.
					"""

					- c-ares, located at deps/cares, is licensed as follows:
					"""
						Copyright (c) 2007 - 2018, Daniel Stenberg with many contributors, see AUTHORS
						file.

						Copyright 1998 by the Massachusetts Institute of Technology.

						Permission to use, copy, modify, and distribute this software and its
						documentation for any purpose and without fee is hereby granted, provided that
						the above copyright notice appear in all copies and that both that copyright
						notice and this permission notice appear in supporting documentation, and that
						the name of M.I.T. not be used in advertising or publicity pertaining to
						distribution of the software without specific, written prior permission.
						M.I.T. makes no representations about the suitability of this software for any
						purpose.  It is provided "as is" without express or implied warranty.
					"""

					- cjs-module-lexer, located at deps/cjs-module-lexer, is licensed as follows:
					"""
						MIT License
						-----------

						Copyright (C) 2018-2020 Guy Bedford

						Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

						The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
					"""

					- ICU, located at deps/icu-small, is licensed as follows:
					"""
						COPYRIGHT AND PERMISSION NOTICE (ICU 58 and later)

						Copyright © 1991-2020 Unicode, Inc. All rights reserved.
						Distributed under the Terms of Use in https://www.unicode.org/copyright.html.

						Permission is hereby granted, free of charge, to any person obtaining
						a copy of the Unicode data files and any associated documentation
						(the "Data Files") or Unicode software and any associated documentation
						(the "Software") to deal in the Data Files or Software
						without restriction, including without limitation the rights to use,
						copy, modify, merge, publish, distribute, and/or sell copies of
						the Data Files or Software, and to permit persons to whom the Data Files
						or Software are furnished to do so, provided that either
						(a) this copyright and permission notice appear with all copies
						of the Data Files or Software, or
						(b) this copyright and permission notice appear in associated
						Documentation.

						THE DATA FILES AND SOFTWARE ARE PROVIDED "AS IS", WITHOUT WARRANTY OF
						ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
						WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
						NONINFRINGEMENT OF THIRD PARTY RIGHTS.
						IN NO EVENT SHALL THE COPYRIGHT HOLDER OR HOLDERS INCLUDED IN THIS
						NOTICE BE LIABLE FOR ANY CLAIM, OR ANY SPECIAL INDIRECT OR CONSEQUENTIAL
						DAMAGES, OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
						DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
						TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
						PERFORMANCE OF THE DATA FILES OR SOFTWARE.

						Except as contained in this notice, the name of a copyright holder
						shall not be used in advertising or otherwise to promote the sale,
						use or other dealings in these Data Files or Software without prior
						written authorization of the copyright holder.

						---------------------

						Third-Party Software Licenses

						This section contains third-party software notices and/or additional
						terms for licensed third-party software components included within ICU
						libraries.

						1. ICU License - ICU 1.8.1 to ICU 57.1

						COPYRIGHT AND PERMISSION NOTICE

						Copyright (c) 1995-2016 International Business Machines Corporation and others
						All rights reserved.

						Permission is hereby granted, free of charge, to any person obtaining
						a copy of this software and associated documentation files (the
						"Software"), to deal in the Software without restriction, including
						without limitation the rights to use, copy, modify, merge, publish,
						distribute, and/or sell copies of the Software, and to permit persons
						to whom the Software is furnished to do so, provided that the above
						copyright notice(s) and this permission notice appear in all copies of
						the Software and that both the above copyright notice(s) and this
						permission notice appear in supporting documentation.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
						EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
						MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
						OF THIRD PARTY RIGHTS. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
						HOLDERS INCLUDED IN THIS NOTICE BE LIABLE FOR ANY CLAIM, OR ANY
						SPECIAL INDIRECT OR CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER
						RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF
						CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
						CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

						Except as contained in this notice, the name of a copyright holder
						shall not be used in advertising or otherwise to promote the sale, use
						or other dealings in this Software without prior written authorization
						of the copyright holder.

						All trademarks and registered trademarks mentioned herein are the
						property of their respective owners.

						2. Chinese/Japanese Word Break Dictionary Data (cjdict.txt)

						#     The Google Chrome software developed by Google is licensed under
						# the BSD license. Other software included in this distribution is
						# provided under other licenses, as set forth below.
						#
						#  The BSD License
						#  http://opensource.org/licenses/bsd-license.php
						#  Copyright (C) 2006-2008, Google Inc.
						#
						#  All rights reserved.
						#
						#  Redistribution and use in source and binary forms, with or without
						# modification, are permitted provided that the following conditions are met:
						#
						#  Redistributions of source code must retain the above copyright notice,
						# this list of conditions and the following disclaimer.
						#  Redistributions in binary form must reproduce the above
						# copyright notice, this list of conditions and the following
						# disclaimer in the documentation and/or other materials provided with
						# the distribution.
						#  Neither the name of  Google Inc. nor the names of its
						# contributors may be used to endorse or promote products derived from
						# this software without specific prior written permission.
						#
						#
						#  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
						# CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
						# INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
						# MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
						# DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
						# LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
						# CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
						# SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
						# BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
						# LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
						# NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
						# SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
						#
						#
						#  The word list in cjdict.txt are generated by combining three word lists
						# listed below with further processing for compound word breaking. The
						# frequency is generated with an iterative training against Google web
						# corpora.
						#
						#  * Libtabe (Chinese)
						#    - https://sourceforge.net/project/?group_id=1519
						#    - Its license terms and conditions are shown below.
						#
						#  * IPADIC (Japanese)
						#    - http://chasen.aist-nara.ac.jp/chasen/distribution.html
						#    - Its license terms and conditions are shown below.
						#
						#  ---------COPYING.libtabe ---- BEGIN--------------------
						#
						#  /*
						#   * Copyright (c) 1999 TaBE Project.
						#   * Copyright (c) 1999 Pai-Hsiang Hsiao.
						#   * All rights reserved.
						#   *
						#   * Redistribution and use in source and binary forms, with or without
						#   * modification, are permitted provided that the following conditions
						#   * are met:
						#   *
						#   * . Redistributions of source code must retain the above copyright
						#   *   notice, this list of conditions and the following disclaimer.
						#   * . Redistributions in binary form must reproduce the above copyright
						#   *   notice, this list of conditions and the following disclaimer in
						#   *   the documentation and/or other materials provided with the
						#   *   distribution.
						#   * . Neither the name of the TaBE Project nor the names of its
						#   *   contributors may be used to endorse or promote products derived
						#   *   from this software without specific prior written permission.
						#   *
						#   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
						#   * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
						#   * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
						#   * FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
						#   * REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
						#   * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
						#   * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
						#   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
						#   * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
						#   * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
						#   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
						#   * OF THE POSSIBILITY OF SUCH DAMAGE.
						#   */
						#
						#  /*
						#   * Copyright (c) 1999 Computer Systems and Communication Lab,
						#   *                    Institute of Information Science, Academia
						#       *                    Sinica. All rights reserved.
						#   *
						#   * Redistribution and use in source and binary forms, with or without
						#   * modification, are permitted provided that the following conditions
						#   * are met:
						#   *
						#   * . Redistributions of source code must retain the above copyright
						#   *   notice, this list of conditions and the following disclaimer.
						#   * . Redistributions in binary form must reproduce the above copyright
						#   *   notice, this list of conditions and the following disclaimer in
						#   *   the documentation and/or other materials provided with the
						#   *   distribution.
						#   * . Neither the name of the Computer Systems and Communication Lab
						#   *   nor the names of its contributors may be used to endorse or
						#   *   promote products derived from this software without specific
						#   *   prior written permission.
						#   *
						#   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
						#   * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
						#   * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
						#   * FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
						#   * REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
						#   * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
						#   * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
						#   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
						#   * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
						#   * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
						#   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
						#   * OF THE POSSIBILITY OF SUCH DAMAGE.
						#   */
						#
						#  Copyright 1996 Chih-Hao Tsai @ Beckman Institute,
						#      University of Illinois
						#  c-tsai4@uiuc.edu  http://casper.beckman.uiuc.edu/~c-tsai4
						#
						#  ---------------COPYING.libtabe-----END--------------------------------
						#
						#
						#  ---------------COPYING.ipadic-----BEGIN-------------------------------
						#
						#  Copyright 2000, 2001, 2002, 2003 Nara Institute of Science
						#  and Technology.  All Rights Reserved.
						#
						#  Use, reproduction, and distribution of this software is permitted.
						#  Any copy of this software, whether in its original form or modified,
						#  must include both the above copyright notice and the following
						#  paragraphs.
						#
						#  Nara Institute of Science and Technology (NAIST),
						#  the copyright holders, disclaims all warranties with regard to this
						#  software, including all implied warranties of merchantability and
						#  fitness, in no event shall NAIST be liable for
						#  any special, indirect or consequential damages or any damages
						#  whatsoever resulting from loss of use, data or profits, whether in an
						#  action of contract, negligence or other tortuous action, arising out
						#  of or in connection with the use or performance of this software.
						#
						#  A large portion of the dictionary entries
						#  originate from ICOT Free Software.  The following conditions for ICOT
						#  Free Software applies to the current dictionary as well.
						#
						#  Each User may also freely distribute the Program, whether in its
						#  original form or modified, to any third party or parties, PROVIDED
						#  that the provisions of Section 3 ("NO WARRANTY") will ALWAYS appear
						#  on, or be attached to, the Program, which is distributed substantially
						#  in the same form as set out herein and that such intended
						#  distribution, if actually made, will neither violate or otherwise
						#  contravene any of the laws and regulations of the countries having
						#  jurisdiction over the User or the intended distribution itself.
						#
						#  NO WARRANTY
						#
						#  The program was produced on an experimental basis in the course of the
						#  research and development conducted during the project and is provided
						#  to users as so produced on an experimental basis.  Accordingly, the
						#  program is provided without any warranty whatsoever, whether express,
						#  implied, statutory or otherwise.  The term "warranty" used herein
						#  includes, but is not limited to, any warranty of the quality,
						#  performance, merchantability and fitness for a particular purpose of
						#  the program and the nonexistence of any infringement or violation of
						#  any right of any third party.
						#
						#  Each user of the program will agree and understand, and be deemed to
						#  have agreed and understood, that there is no warranty whatsoever for
						#  the program and, accordingly, the entire risk arising from or
						#  otherwise connected with the program is assumed by the user.
						#
						#  Therefore, neither ICOT, the copyright holder, or any other
						#  organization that participated in or was otherwise related to the
						#  development of the program and their respective officials, directors,
						#  officers and other employees shall be held liable for any and all
						#  damages, including, without limitation, general, special, incidental
						#  and consequential damages, arising out of or otherwise in connection
						#  with the use or inability to use the program or any product, material
						#  or result produced or otherwise obtained by using the program,
						#  regardless of whether they have been advised of, or otherwise had
						#  knowledge of, the possibility of such damages at any time during the
						#  project or thereafter.  Each user will be deemed to have agreed to the
						#  foregoing by his or her commencement of use of the program.  The term
						#  "use" as used herein includes, but is not limited to, the use,
						#  modification, copying and distribution of the program and the
						#  production of secondary products from the program.
						#
						#  In the case where the program, whether in its original form or
						#  modified, was distributed or delivered to or received by a user from
						#  any person, organization or entity other than ICOT, unless it makes or
						#  grants independently of ICOT any specific warranty to the user in
						#  writing, such person, organization or entity, will also be exempted
						#  from and not be held liable to the user for any such damages as noted
						#  above as far as the program is concerned.
						#
						#  ---------------COPYING.ipadic-----END----------------------------------

						3. Lao Word Break Dictionary Data (laodict.txt)

						#  Copyright (c) 2013 International Business Machines Corporation
						#  and others. All Rights Reserved.
						#
						# Project: https://github.com/veer66/lao-dictionary
						# Dictionary: https://github.com/veer66/lao-dictionary/blob/master/Lao-Dictionary.txt
						# License: https://github.com/veer66/lao-dictionary/blob/master/Lao-Dictionary-LICENSE.txt
						#              (copied below)
						#
						#  This file is derived from the above dictionary, with slight
						#  modifications.
						#  ----------------------------------------------------------------------
						#  Copyright (C) 2013 Brian Eugene Wilson, Robert Martin Campbell.
						#  All rights reserved.
						#
						#  Redistribution and use in source and binary forms, with or without
						#  modification,
						#  are permitted provided that the following conditions are met:
						#
						#
						# Redistributions of source code must retain the above copyright notice, this
						#  list of conditions and the following disclaimer. Redistributions in
						#  binary form must reproduce the above copyright notice, this list of
						#  conditions and the following disclaimer in the documentation and/or
						#  other materials provided with the distribution.
						#
						#
						# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
						# "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
						# LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
						# FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
						# COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
						# INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
						# (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
						# SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
						# HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
						# STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
						# ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
						# OF THE POSSIBILITY OF SUCH DAMAGE.
						#  --------------------------------------------------------------------------

						4. Burmese Word Break Dictionary Data (burmesedict.txt)

						#  Copyright (c) 2014 International Business Machines Corporation
						#  and others. All Rights Reserved.
						#
						#  This list is part of a project hosted at:
						#    github.com/kanyawtech/myanmar-karen-word-lists
						#
						#  --------------------------------------------------------------------------
						#  Copyright (c) 2013, LeRoy Benjamin Sharon
						#  All rights reserved.
						#
						#  Redistribution and use in source and binary forms, with or without
						#  modification, are permitted provided that the following conditions
						#  are met: Redistributions of source code must retain the above
						#  copyright notice, this list of conditions and the following
						#  disclaimer.  Redistributions in binary form must reproduce the
						#  above copyright notice, this list of conditions and the following
						#  disclaimer in the documentation and/or other materials provided
						#  with the distribution.
						#
						#    Neither the name Myanmar Karen Word Lists, nor the names of its
						#    contributors may be used to endorse or promote products derived
						#    from this software without specific prior written permission.
						#
						#  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
						#  CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
						#  INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
						#  MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
						#  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS
						#  BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
						#  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
						#  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
						#  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
						#  ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
						#  TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
						#  THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
						#  SUCH DAMAGE.
						#  --------------------------------------------------------------------------

						5. Time Zone Database

						ICU uses the public domain data and code derived from Time Zone
						Database for its time zone support. The ownership of the TZ database
						is explained in BCP 175: Procedure for Maintaining the Time Zone
						Database section 7.

						# 7.  Database Ownership
						#
						#    The TZ database itself is not an IETF Contribution or an IETF
						#    document.  Rather it is a pre-existing and regularly updated work
						#    that is in the public domain, and is intended to remain in the
						#    public domain.  Therefore, BCPs 78 [RFC5378] and 79 [RFC3979] do
						#    not apply to the TZ Database or contributions that individuals make
						#    to it.  Should any claims be made and substantiated against the TZ
						#    Database, the organization that is providing the IANA
						#    Considerations defined in this RFC, under the memorandum of
						#    understanding with the IETF, currently ICANN, may act in accordance
						#    with all competent court orders.  No ownership claims will be made
						#    by ICANN or the IETF Trust on the database or the code.  Any person
						#    making a contribution to the database or code waives all rights to
						#    future claims in that contribution or in the TZ Database.

						6. Google double-conversion

						Copyright 2006-2011, the V8 project authors. All rights reserved.
						Redistribution and use in source and binary forms, with or without
						modification, are permitted provided that the following conditions are
						met:

							* Redistributions of source code must retain the above copyright
							notice, this list of conditions and the following disclaimer.
							* Redistributions in binary form must reproduce the above
							copyright notice, this list of conditions and the following
							disclaimer in the documentation and/or other materials provided
							with the distribution.
							* Neither the name of Google Inc. nor the names of its
							contributors may be used to endorse or promote products derived
							from this software without specific prior written permission.

						THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
						"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
						LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
						A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
						OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
						SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
						LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
						DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
						THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
						(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
						OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
					"""

					- libuv, located at deps/uv, is licensed as follows:
					"""
						libuv is licensed for use as follows:

						====
						Copyright (c) 2015-present libuv project contributors.

						Permission is hereby granted, free of charge, to any person obtaining a copy
						of this software and associated documentation files (the "Software"), to
						deal in the Software without restriction, including without limitation the
						rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
						sell copies of the Software, and to permit persons to whom the Software is
						furnished to do so, subject to the following conditions:

						The above copyright notice and this permission notice shall be included in
						all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
						IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
						FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
						AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
						LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
						FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
						IN THE SOFTWARE.
						====

						This license applies to parts of libuv originating from the
						https://github.com/joyent/libuv repository:

						====

						Copyright Joyent, Inc. and other Node contributors. All rights reserved.
						Permission is hereby granted, free of charge, to any person obtaining a copy
						of this software and associated documentation files (the "Software"), to
						deal in the Software without restriction, including without limitation the
						rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
						sell copies of the Software, and to permit persons to whom the Software is
						furnished to do so, subject to the following conditions:

						The above copyright notice and this permission notice shall be included in
						all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
						IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
						FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
						AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
						LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
						FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
						IN THE SOFTWARE.

						====

						This license applies to all parts of libuv that are not externally
						maintained libraries.

						The externally maintained libraries used by libuv are:

						- tree.h (from FreeBSD), copyright Niels Provos. Two clause BSD license.

						- inet_pton and inet_ntop implementations, contained in src/inet.c, are
							copyright the Internet Systems Consortium, Inc., and licensed under the ISC
							license.

						- stdint-msvc2008.h (from msinttypes), copyright Alexander Chemeris. Three
							clause BSD license.

						- pthread-fixes.c, copyright Google Inc. and Sony Mobile Communications AB.
							Three clause BSD license.

						- android-ifaddrs.h, android-ifaddrs.c, copyright Berkeley Software Design
							Inc, Kenneth MacKay and Emergya (Cloud4all, FP7/2007-2013, grant agreement
							n° 289016). Three clause BSD license.
					"""

					- llhttp, located at deps/llhttp, is licensed as follows:
					"""
						This software is licensed under the MIT License.

						Copyright Fedor Indutny, 2018.

						Permission is hereby granted, free of charge, to any person obtaining a
						copy of this software and associated documentation files (the
						"Software"), to deal in the Software without restriction, including
						without limitation the rights to use, copy, modify, merge, publish,
						distribute, sublicense, and/or sell copies of the Software, and to permit
						persons to whom the Software is furnished to do so, subject to the
						following conditions:

						The above copyright notice and this permission notice shall be included
						in all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
						OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
						MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
						NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
						DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
						OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
						USE OR OTHER DEALINGS IN THE SOFTWARE.
					"""

					- OpenSSL, located at deps/openssl, is licensed as follows:
					"""
						Copyright (c) 1998-2019 The OpenSSL Project.  All rights reserved.

						Redistribution and use in source and binary forms, with or without
						modification, are permitted provided that the following conditions
						are met:

						1. Redistributions of source code must retain the above copyright
						notice, this list of conditions and the following disclaimer.

						2. Redistributions in binary form must reproduce the above copyright
						notice, this list of conditions and the following disclaimer in
						the documentation and/or other materials provided with the
						distribution.

						3. All advertising materials mentioning features or use of this
						software must display the following acknowledgment:
						"This product includes software developed by the OpenSSL Project
						for use in the OpenSSL Toolkit. (http://www.openssl.org/)"

						4. The names "OpenSSL Toolkit" and "OpenSSL Project" must not be used to
						endorse or promote products derived from this software without
						prior written permission. For written permission, please contact
						openssl-core@openssl.org.

						5. Products derived from this software may not be called "OpenSSL"
						nor may "OpenSSL" appear in their names without prior written
						permission of the OpenSSL Project.

						6. Redistributions of any form whatsoever must retain the following
						acknowledgment:
						"This product includes software developed by the OpenSSL Project
						for use in the OpenSSL Toolkit (http://www.openssl.org/)"

						THIS SOFTWARE IS PROVIDED BY THE OpenSSL PROJECT ``AS IS'' AND ANY
						EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
						IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
						PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE OpenSSL PROJECT OR
						ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
						SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
						NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
						LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
						HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
						STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
						ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
						OF THE POSSIBILITY OF SUCH DAMAGE.
						====================================================================

						This product includes cryptographic software written by Eric Young
						(eay@cryptsoft.com).  This product includes software written by Tim
						Hudson (tjh@cryptsoft.com).
					"""

					- Punycode.js, located at lib/punycode.js, is licensed as follows:
					"""
						Copyright Mathias Bynens https://mathiasbynens.be

						Permission is hereby granted, free of charge, to any person obtaining
						a copy of this software and associated documentation files (the
						"Software"), to deal in the Software without restriction, including
						without limitation the rights to use, copy, modify, merge, publish,
						distribute, sublicense, and/or sell copies of the Software, and to
						permit persons to whom the Software is furnished to do so, subject to
						the following conditions:

						The above copyright notice and this permission notice shall be
						included in all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
						EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
						MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
						NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
						LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
						OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
						WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
					"""

					- V8, located at deps/v8, is licensed as follows:
					"""
						This license applies to all parts of V8 that are not externally
						maintained libraries.  The externally maintained libraries used by V8
						are:

						- PCRE test suite, located in
							test/mjsunit/third_party/regexp-pcre/regexp-pcre.js.  This is based on the
							test suite from PCRE-7.3, which is copyrighted by the University
							of Cambridge and Google, Inc.  The copyright notice and license
							are embedded in regexp-pcre.js.

						- Layout tests, located in test/mjsunit/third_party/object-keys.  These are
							based on layout tests from webkit.org which are copyrighted by
							Apple Computer, Inc. and released under a 3-clause BSD license.

						- Strongtalk assembler, the basis of the files assembler-arm-inl.h,
							assembler-arm.cc, assembler-arm.h, assembler-ia32-inl.h,
							assembler-ia32.cc, assembler-ia32.h, assembler-x64-inl.h,
							assembler-x64.cc, assembler-x64.h, assembler-mips-inl.h,
							assembler-mips.cc, assembler-mips.h, assembler.cc and assembler.h.
							This code is copyrighted by Sun Microsystems Inc. and released
							under a 3-clause BSD license.

						- Valgrind client API header, located at src/third_party/valgrind/valgrind.h
							This is released under the BSD license.

						- The Wasm C/C++ API headers, located at third_party/wasm-api/wasm.
							This is released under the Apache license. The API's upstream prototype
							implementation also formed the basis of V8's implementation in
							src/wasm/c-api.cc.

						These libraries have their own licenses; we recommend you read them,
						as their terms may differ from the terms below.

						Further license information can be found in LICENSE files located in
						sub-directories.

						Copyright 2014, the V8 project authors. All rights reserved.
						Redistribution and use in source and binary forms, with or without
						modification, are permitted provided that the following conditions are
						met:

							* Redistributions of source code must retain the above copyright
							notice, this list of conditions and the following disclaimer.
							* Redistributions in binary form must reproduce the above
							copyright notice, this list of conditions and the following
							disclaimer in the documentation and/or other materials provided
							with the distribution.
							* Neither the name of Google Inc. nor the names of its
							contributors may be used to endorse or promote products derived
							from this software without specific prior written permission.

						THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
						"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
						LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
						A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
						OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
						SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
						LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
						DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
						THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
						(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
						OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
					"""

					- SipHash, located at deps/v8/src/third_party/siphash, is licensed as follows:
					"""
						SipHash reference C implementation

						Copyright (c) 2016 Jean-Philippe Aumasson jeanphilippe.aumasson@gmail.com

						To the extent possible under law, the author(s) have dedicated all
						copyright and related and neighboring rights to this software to the public
						domain worldwide. This software is distributed without any warranty.
					"""

					- zlib, located at deps/zlib, is licensed as follows:
					"""
						zlib.h -- interface of the 'zlib' general purpose compression library
						version 1.2.11, January 15th, 2017

						Copyright (C) 1995-2017 Jean-loup Gailly and Mark Adler

						This software is provided 'as-is', without any express or implied
						warranty.  In no event will the authors be held liable for any damages
						arising from the use of this software.

						Permission is granted to anyone to use this software for any purpose,
						including commercial applications, and to alter it and redistribute it
						freely, subject to the following restrictions:

						1. The origin of this software must not be misrepresented; you must not
						claim that you wrote the original software. If you use this software
						in a product, an acknowledgment in the product documentation would be
						appreciated but is not required.
						2. Altered source versions must be plainly marked as such, and must not be
						misrepresented as being the original software.
						3. This notice may not be removed or altered from any source distribution.

						Jean-loup Gailly        Mark Adler
						jloup@gzip.org          madler@alumni.caltech.edu
					"""

					- npm, located at deps/npm, is licensed as follows:
					"""
						The npm application
						Copyright (c) npm, Inc. and Contributors
						Licensed on the terms of The Artistic License 2.0

						Node package dependencies of the npm application
						Copyright (c) their respective copyright owners
						Licensed on their respective license terms

						The npm public registry at https://registry.npmjs.org
						and the npm website at https://www.npmjs.com
						Operated by npm, Inc.
						Use governed by terms published on https://www.npmjs.com

						"Node.js"
						Trademark Joyent, Inc., https://joyent.com
						Neither npm nor npm, Inc. are affiliated with Joyent, Inc.

						The Node.js application
						Project of Node Foundation, https://nodejs.org

						The npm Logo
						Copyright (c) Mathias Pettersson and Brian Hammond

						"Gubblebum Blocky" typeface
						Copyright (c) Tjarda Koster, https://jelloween.deviantart.com
						Used with permission

						--------

						The Artistic License 2.0

						Copyright (c) 2000-2006, The Perl Foundation.

						Everyone is permitted to copy and distribute verbatim copies
						of this license document, but changing it is not allowed.

						Preamble

						This license establishes the terms under which a given free software
						Package may be copied, modified, distributed, and/or redistributed.
						The intent is that the Copyright Holder maintains some artistic
						control over the development of that Package while still keeping the
						Package available as open source and free software.

						You are always permitted to make arrangements wholly outside of this
						license directly with the Copyright Holder of a given Package.  If the
						terms of this license do not permit the full use that you propose to
						make of the Package, you should contact the Copyright Holder and seek
						a different licensing arrangement.

						Definitions

							"Copyright Holder" means the individual(s) or organization(s)
							named in the copyright notice for the entire Package.

							"Contributor" means any party that has contributed code or other
							material to the Package, in accordance with the Copyright Holder's
							procedures.

							"You" and "your" means any person who would like to copy,
							distribute, or modify the Package.

							"Package" means the collection of files distributed by the
							Copyright Holder, and derivatives of that collection and/or of
							those files. A given Package may consist of either the Standard
							Version, or a Modified Version.

							"Distribute" means providing a copy of the Package or making it
							accessible to anyone else, or in the case of a company or
							organization, to others outside of your company or organization.

							"Distributor Fee" means any fee that you charge for Distributing
							this Package or providing support for this Package to another
							party.  It does not mean licensing fees.

							"Standard Version" refers to the Package if it has not been
							modified, or has been modified only in ways explicitly requested
							by the Copyright Holder.

							"Modified Version" means the Package, if it has been changed, and
							such changes were not explicitly requested by the Copyright
							Holder.

							"Original License" means this Artistic License as Distributed with
							the Standard Version of the Package, in its current version or as
							it may be modified by The Perl Foundation in the future.

							"Source" form means the source code, documentation source, and
							configuration files for the Package.

							"Compiled" form means the compiled bytecode, object code, binary,
							or any other form resulting from mechanical transformation or
							translation of the Source form.

						Permission for Use and Modification Without Distribution

						(1)  You are permitted to use the Standard Version and create and use
						Modified Versions for any purpose without restriction, provided that
						you do not Distribute the Modified Version.

						Permissions for Redistribution of the Standard Version

						(2)  You may Distribute verbatim copies of the Source form of the
						Standard Version of this Package in any medium without restriction,
						either gratis or for a Distributor Fee, provided that you duplicate
						all of the original copyright notices and associated disclaimers.  At
						your discretion, such verbatim copies may or may not include a
						Compiled form of the Package.

						(3)  You may apply any bug fixes, portability changes, and other
						modifications made available from the Copyright Holder.  The resulting
						Package will still be considered the Standard Version, and as such
						will be subject to the Original License.

						Distribution of Modified Versions of the Package as Source

						(4)  You may Distribute your Modified Version as Source (either gratis
						or for a Distributor Fee, and with or without a Compiled form of the
						Modified Version) provided that you clearly document how it differs
						from the Standard Version, including, but not limited to, documenting
						any non-standard features, executables, or modules, and provided that
						you do at least ONE of the following:

							(a)  make the Modified Version available to the Copyright Holder
							of the Standard Version, under the Original License, so that the
							Copyright Holder may include your modifications in the Standard
							Version.

							(b)  ensure that installation of your Modified Version does not
							prevent the user installing or running the Standard Version. In
							addition, the Modified Version must bear a name that is different
							from the name of the Standard Version.

							(c)  allow anyone who receives a copy of the Modified Version to
							make the Source form of the Modified Version available to others
							under

								(i)  the Original License or

								(ii)  a license that permits the licensee to freely copy,
								modify and redistribute the Modified Version using the same
								licensing terms that apply to the copy that the licensee
								received, and requires that the Source form of the Modified
								Version, and of any works derived from it, be made freely
								available in that license fees are prohibited but Distributor
								Fees are allowed.

						Distribution of Compiled Forms of the Standard Version
						or Modified Versions without the Source

						(5)  You may Distribute Compiled forms of the Standard Version without
						the Source, provided that you include complete instructions on how to
						get the Source of the Standard Version.  Such instructions must be
						valid at the time of your distribution.  If these instructions, at any
						time while you are carrying out such distribution, become invalid, you
						must provide new instructions on demand or cease further distribution.
						If you provide valid instructions or cease distribution within thirty
						days after you become aware that the instructions are invalid, then
						you do not forfeit any of your rights under this license.

						(6)  You may Distribute a Modified Version in Compiled form without
						the Source, provided that you comply with Section 4 with respect to
						the Source of the Modified Version.

						Aggregating or Linking the Package

						(7)  You may aggregate the Package (either the Standard Version or
						Modified Version) with other packages and Distribute the resulting
						aggregation provided that you do not charge a licensing fee for the
						Package.  Distributor Fees are permitted, and licensing fees for other
						components in the aggregation are permitted. The terms of this license
						apply to the use and Distribution of the Standard or Modified Versions
						as included in the aggregation.

						(8) You are permitted to link Modified and Standard Versions with
						other works, to embed the Package in a larger work of your own, or to
						build stand-alone binary or bytecode versions of applications that
						include the Package, and Distribute the result without restriction,
						provided the result does not expose a direct interface to the Package.

						Items That are Not Considered Part of a Modified Version

						(9) Works (including, but not limited to, modules and scripts) that
						merely extend or make use of the Package, do not, by themselves, cause
						the Package to be a Modified Version.  In addition, such works are not
						considered parts of the Package itself, and are not subject to the
						terms of this license.

						General Provisions

						(10)  Any use, modification, and distribution of the Standard or
						Modified Versions is governed by this Artistic License. By using,
						modifying or distributing the Package, you accept this license. Do not
						use, modify, or distribute the Package, if you do not accept this
						license.

						(11)  If your Modified Version has been derived from a Modified
						Version made by someone other than you, you are nevertheless required
						to ensure that your Modified Version complies with the requirements of
						this license.

						(12)  This license does not grant you the right to use any trademark,
						service mark, tradename, or logo of the Copyright Holder.

						(13)  This license includes the non-exclusive, worldwide,
						free-of-charge patent license to make, have made, use, offer to sell,
						sell, import and otherwise transfer the Package with respect to any
						patent claims licensable by the Copyright Holder that are necessarily
						infringed by the Package. If you institute patent litigation
						(including a cross-claim or counterclaim) against any party alleging
						that the Package constitutes direct or contributory patent
						infringement, then this Artistic License to you shall terminate on the
						date that such litigation is filed.

						(14)  Disclaimer of Warranty:
						THE PACKAGE IS PROVIDED BY THE COPYRIGHT HOLDER AND CONTRIBUTORS "AS
						IS' AND WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES. THE IMPLIED
						WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
						NON-INFRINGEMENT ARE DISCLAIMED TO THE EXTENT PERMITTED BY YOUR LOCAL
						LAW. UNLESS REQUIRED BY LAW, NO COPYRIGHT HOLDER OR CONTRIBUTOR WILL
						BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
						DAMAGES ARISING IN ANY WAY OUT OF THE USE OF THE PACKAGE, EVEN IF
						ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

						--------
					"""

					- GYP, located at tools/gyp, is licensed as follows:
					"""
						Copyright (c) 2020 Node.js contributors. All rights reserved.
						Copyright (c) 2009 Google Inc. All rights reserved.

						Redistribution and use in source and binary forms, with or without
						modification, are permitted provided that the following conditions are
						met:

						* Redistributions of source code must retain the above copyright
						notice, this list of conditions and the following disclaimer.
						* Redistributions in binary form must reproduce the above
						copyright notice, this list of conditions and the following disclaimer
						in the documentation and/or other materials provided with the
						distribution.
						* Neither the name of Google Inc. nor the names of its
						contributors may be used to endorse or promote products derived from
						this software without specific prior written permission.

						THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
						"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
						LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
						A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
						OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
						SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
						LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
						DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
						THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
						(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
						OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
					"""

					- inspector_protocol, located at tools/inspector_protocol, is licensed as follows:
					"""
						// Copyright 2016 The Chromium Authors. All rights reserved.
						//
						// Redistribution and use in source and binary forms, with or without
						// modification, are permitted provided that the following conditions are
						// met:
						//
						//    * Redistributions of source code must retain the above copyright
						// notice, this list of conditions and the following disclaimer.
						//    * Redistributions in binary form must reproduce the above
						// copyright notice, this list of conditions and the following disclaimer
						// in the documentation and/or other materials provided with the
						// distribution.
						//    * Neither the name of Google Inc. nor the names of its
						// contributors may be used to endorse or promote products derived from
						// this software without specific prior written permission.
						//
						// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
						// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
						// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
						// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
						// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
						// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
						// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
						// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
						// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
						// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
						// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
					"""

					- jinja2, located at tools/inspector_protocol/jinja2, is licensed as follows:
					"""
						Copyright (c) 2009 by the Jinja Team, see AUTHORS for more details.

						Some rights reserved.

						Redistribution and use in source and binary forms, with or without
						modification, are permitted provided that the following conditions are
						met:

							* Redistributions of source code must retain the above copyright
							notice, this list of conditions and the following disclaimer.

							* Redistributions in binary form must reproduce the above
							copyright notice, this list of conditions and the following
							disclaimer in the documentation and/or other materials provided
							with the distribution.

							* The names of the contributors may not be used to endorse or
							promote products derived from this software without specific
							prior written permission.

						THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
						"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
						LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
						A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
						OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
						SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
						LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
						DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
						THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
						(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
						OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
					"""

					- markupsafe, located at tools/inspector_protocol/markupsafe, is licensed as follows:
					"""
						Copyright (c) 2010 by Armin Ronacher and contributors.  See AUTHORS
						for more details.

						Some rights reserved.

						Redistribution and use in source and binary forms of the software as well
						as documentation, with or without modification, are permitted provided
						that the following conditions are met:

						* Redistributions of source code must retain the above copyright
						notice, this list of conditions and the following disclaimer.

						* Redistributions in binary form must reproduce the above
						copyright notice, this list of conditions and the following
						disclaimer in the documentation and/or other materials provided
						with the distribution.

						* The names of the contributors may not be used to endorse or
						promote products derived from this software without specific
						prior written permission.

						THIS SOFTWARE AND DOCUMENTATION IS PROVIDED BY THE COPYRIGHT HOLDERS AND
						CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT
						NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
						A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER
						OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
						EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
						PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
						PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
						LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
						NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
						SOFTWARE AND DOCUMENTATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
						DAMAGE.
					"""

					- cpplint.py, located at tools/cpplint.py, is licensed as follows:
					"""
						Copyright (c) 2009 Google Inc. All rights reserved.

						Redistribution and use in source and binary forms, with or without
						modification, are permitted provided that the following conditions are
						met:

						* Redistributions of source code must retain the above copyright
						notice, this list of conditions and the following disclaimer.
						* Redistributions in binary form must reproduce the above
						copyright notice, this list of conditions and the following disclaimer
						in the documentation and/or other materials provided with the
						distribution.
						* Neither the name of Google Inc. nor the names of its
						contributors may be used to endorse or promote products derived from
						this software without specific prior written permission.

						THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
						"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
						LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
						A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
						OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
						SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
						LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
						DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
						THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
						(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
						OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
					"""

					- ESLint, located at tools/node_modules/eslint, is licensed as follows:
					"""
						Copyright JS Foundation and other contributors, https://js.foundation

						Permission is hereby granted, free of charge, to any person obtaining a copy
						of this software and associated documentation files (the "Software"), to deal
						in the Software without restriction, including without limitation the rights
						to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
						copies of the Software, and to permit persons to whom the Software is
						furnished to do so, subject to the following conditions:

						The above copyright notice and this permission notice shall be included in
						all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
						IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
						FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
						AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
						LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
						OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
						THE SOFTWARE.
					"""

					- Babel, located at tools/node_modules/@babel, is licensed as follows:
					"""
						MIT License

						Copyright (c) 2014-present Sebastian McKenzie and other contributors

						Permission is hereby granted, free of charge, to any person obtaining
						a copy of this software and associated documentation files (the
						"Software"), to deal in the Software without restriction, including
						without limitation the rights to use, copy, modify, merge, publish,
						distribute, sublicense, and/or sell copies of the Software, and to
						permit persons to whom the Software is furnished to do so, subject to
						the following conditions:

						The above copyright notice and this permission notice shall be
						included in all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
						EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
						MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
						NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
						LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
						OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
						WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
					"""

					- gtest, located at test/cctest/gtest, is licensed as follows:
					"""
						Copyright 2008, Google Inc.
						All rights reserved.

						Redistribution and use in source and binary forms, with or without
						modification, are permitted provided that the following conditions are
						met:

							* Redistributions of source code must retain the above copyright
						notice, this list of conditions and the following disclaimer.
							* Redistributions in binary form must reproduce the above
						copyright notice, this list of conditions and the following disclaimer
						in the documentation and/or other materials provided with the
						distribution.
							* Neither the name of Google Inc. nor the names of its
						contributors may be used to endorse or promote products derived from
						this software without specific prior written permission.

						THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
						"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
						LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
						A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
						OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
						SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
						LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
						DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
						THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
						(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
						OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
					"""

					- nghttp2, located at deps/nghttp2, is licensed as follows:
					"""
						The MIT License

						Copyright (c) 2012, 2014, 2015, 2016 Tatsuhiro Tsujikawa
						Copyright (c) 2012, 2014, 2015, 2016 nghttp2 contributors

						Permission is hereby granted, free of charge, to any person obtaining
						a copy of this software and associated documentation files (the
						"Software"), to deal in the Software without restriction, including
						without limitation the rights to use, copy, modify, merge, publish,
						distribute, sublicense, and/or sell copies of the Software, and to
						permit persons to whom the Software is furnished to do so, subject to
						the following conditions:

						The above copyright notice and this permission notice shall be
						included in all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
						EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
						MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
						NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
						LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
						OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
						WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
					"""

					- large_pages, located at src/large_pages, is licensed as follows:
					"""
						Copyright (C) 2018 Intel Corporation

						Permission is hereby granted, free of charge, to any person obtaining a copy
						of this software and associated documentation files (the "Software"),
						to deal in the Software without restriction, including without limitation
						the rights to use, copy, modify, merge, publish, distribute, sublicense,
						and/or sell copies of the Software, and to permit persons to whom
						the Software is furnished to do so, subject to the following conditions:

						The above copyright notice and this permission notice shall be included
						in all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
						OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
						FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
						THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
						OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
						ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
						OR OTHER DEALINGS IN THE SOFTWARE.
					"""

					- caja, located at lib/internal/freeze_intrinsics.js, is licensed as follows:
					"""
						Adapted from SES/Caja - Copyright (C) 2011 Google Inc.
						Copyright (C) 2018 Agoric

						Licensed under the Apache License, Version 2.0 (the "License");
						you may not use this file except in compliance with the License.
						You may obtain a copy of the License at

						http://www.apache.org/licenses/LICENSE-2.0

						Unless required by applicable law or agreed to in writing, software
						distributed under the License is distributed on an "AS IS" BASIS,
						WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
						See the License for the specific language governing permissions and
						limitations under the License.
					"""

					- brotli, located at deps/brotli, is licensed as follows:
					"""
						Copyright (c) 2009, 2010, 2013-2016 by the Brotli Authors.

						Permission is hereby granted, free of charge, to any person obtaining a copy
						of this software and associated documentation files (the "Software"), to deal
						in the Software without restriction, including without limitation the rights
						to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
						copies of the Software, and to permit persons to whom the Software is
						furnished to do so, subject to the following conditions:

						The above copyright notice and this permission notice shall be included in
						all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
						IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
						FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
						AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
						LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
						OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
						THE SOFTWARE.
					"""

					- HdrHistogram, located at deps/histogram, is licensed as follows:
					"""
						The code in this repository code was Written by Gil Tene, Michael Barker,
						and Matt Warren, and released to the public domain, as explained at
						http://creativecommons.org/publicdomain/zero/1.0/

						For users of this code who wish to consume it under the "BSD" license
						rather than under the public domain or CC0 contribution text mentioned
						above, the code found under this directory is *also* provided under the
						following license (commonly referred to as the BSD 2-Clause License). This
						license does not detract from the above stated release of the code into
						the public domain, and simply represents an additional license granted by
						the Author.

						-----------------------------------------------------------------------------
						** Beginning of "BSD 2-Clause License" text. **

						Copyright (c) 2012, 2013, 2014 Gil Tene
						Copyright (c) 2014 Michael Barker
						Copyright (c) 2014 Matt Warren
						All rights reserved.

						Redistribution and use in source and binary forms, with or without
						modification, are permitted provided that the following conditions are met:

						1. Redistributions of source code must retain the above copyright notice,
							this list of conditions and the following disclaimer.

						2. Redistributions in binary form must reproduce the above copyright notice,
							this list of conditions and the following disclaimer in the documentation
							and/or other materials provided with the distribution.

						THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
						AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
						IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
						ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
						LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
						CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
						SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
						INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
						CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
						ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
						THE POSSIBILITY OF SUCH DAMAGE.
					"""

					- highlight.js, located at doc/api_assets/highlight.pack.js, is licensed as follows:
					"""
						BSD 3-Clause License

						Copyright (c) 2006, Ivan Sagalaev.
						All rights reserved.

						Redistribution and use in source and binary forms, with or without
						modification, are permitted provided that the following conditions are met:

						* Redistributions of source code must retain the above copyright notice, this
						list of conditions and the following disclaimer.

						* Redistributions in binary form must reproduce the above copyright notice,
						this list of conditions and the following disclaimer in the documentation
						and/or other materials provided with the distribution.

						* Neither the name of the copyright holder nor the names of its
						contributors may be used to endorse or promote products derived from
						this software without specific prior written permission.

						THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
						AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
						IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
						DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
						FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
						DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
						SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
						CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
						OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
						OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
					"""

					- node-heapdump, located at src/heap_utils.cc, is licensed as follows:
					"""
						ISC License

						Copyright (c) 2012, Ben Noordhuis info@bnoordhuis.nl

						Permission to use, copy, modify, and/or distribute this software for any
						purpose with or without fee is hereby granted, provided that the above
						copyright notice and this permission notice appear in all copies.

						THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
						WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
						MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
						ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
						WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
						ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
						OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

						=== src/compat.h src/compat-inl.h ===

						ISC License

						Copyright (c) 2014, StrongLoop Inc.

						Permission to use, copy, modify, and/or distribute this software for any
						purpose with or without fee is hereby granted, provided that the above
						copyright notice and this permission notice appear in all copies.

						THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
						WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
						MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
						ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
						WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
						ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
						OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
					"""

					- rimraf, located at lib/internal/fs/rimraf.js, is licensed as follows:
					"""
						The ISC License

						Copyright (c) Isaac Z. Schlueter and Contributors

						Permission to use, copy, modify, and/or distribute this software for any
						purpose with or without fee is hereby granted, provided that the above
						copyright notice and this permission notice appear in all copies.

						THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
						WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
						MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
						ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
						WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
						ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
						IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
					"""

					- uvwasi, located at deps/uvwasi, is licensed as follows:
					"""
						MIT License

						Copyright (c) 2019 Colin Ihrig and Contributors

						Permission is hereby granted, free of charge, to any person obtaining a copy
						of this software and associated documentation files (the "Software"), to deal
						in the Software without restriction, including without limitation the rights
						to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
						copies of the Software, and to permit persons to whom the Software is
						furnished to do so, subject to the following conditions:

						The above copyright notice and this permission notice shall be included in all
						copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
						IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
						FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
						AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
						LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
						OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
						SOFTWARE.
					"""

					- ngtcp2, located at deps/ngtcp2/ngtcp2/, is licensed as follows:
					"""
						The MIT License

						Copyright (c) 2016 ngtcp2 contributors

						Permission is hereby granted, free of charge, to any person obtaining
						a copy of this software and associated documentation files (the
						"Software"), to deal in the Software without restriction, including
						without limitation the rights to use, copy, modify, merge, publish,
						distribute, sublicense, and/or sell copies of the Software, and to
						permit persons to whom the Software is furnished to do so, subject to
						the following conditions:

						The above copyright notice and this permission notice shall be
						included in all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
						EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
						MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
						NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
						LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
						OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
						WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
					"""

					- nghttp3, located at deps/ngtcp2/nghttp3/, is licensed as follows:
					"""
						The MIT License

						Copyright (c) 2019 nghttp3 contributors

						Permission is hereby granted, free of charge, to any person obtaining
						a copy of this software and associated documentation files (the
						"Software"), to deal in the Software without restriction, including
						without limitation the rights to use, copy, modify, merge, publish,
						distribute, sublicense, and/or sell copies of the Software, and to
						permit persons to whom the Software is furnished to do so, subject to
						the following conditions:

						The above copyright notice and this permission notice shall be
						included in all copies or substantial portions of the Software.

						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
						EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
						MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
						NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
						LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
						OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
						WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
					"""
				</Accordion>
				<Accordion className='m-3 card bg-light' title='React, React DOM'>
					MIT License

					Copyright (c) Facebook, Inc. and its affiliates.

					Permission is hereby granted, free of charge, to any person obtaining a copy
					of this software and associated documentation files (the "Software"), to deal
					in the Software without restriction, including without limitation the rights
					to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
					copies of the Software, and to permit persons to whom the Software is
					furnished to do so, subject to the following conditions:

					The above copyright notice and this permission notice shall be included in all
					copies or substantial portions of the Software.

					THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
					IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
					FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
					AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
					LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
					OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
					SOFTWARE.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='React-Modal'>
					Copyright (c) 2017 Ryan Florence

					Permission is hereby granted, free of charge, to any person obtaining a copy of
					this software and associated documentation files (the "Software"), to deal in
					the Software without restriction, including without limitation the rights to
					use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
					of the Software, and to permit persons to whom the Software is furnished to do
					so, subject to the following conditions:

					The above copyright notice and this permission notice shall be included in all
					copies or substantial portions of the Software.

					THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
					IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
					FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
					AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
					LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
					OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
					SOFTWARE.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='React-Router, React-RouterDOM'>
					MIT License

					Copyright (c) React Training 2016-2018

					Permission is hereby granted, free of charge, to any person obtaining a copy
					of this software and associated documentation files (the "Software"), to deal
					in the Software without restriction, including without limitation the rights
					to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
					copies of the Software, and to permit persons to whom the Software is
					furnished to do so, subject to the following conditions:

					The above copyright notice and this permission notice shall be included in all
					copies or substantial portions of the Software.

					THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
					IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
					FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
					AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
					LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
					OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
					SOFTWARE.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='ReactScripts'>
					MIT License

					Copyright (c) 2013-present, Facebook, Inc.

					Permission is hereby granted, free of charge, to any person obtaining a copy
					of this software and associated documentation files (the "Software"), to deal
					in the Software without restriction, including without limitation the rights
					to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
					copies of the Software, and to permit persons to whom the Software is
					furnished to do so, subject to the following conditions:

					The above copyright notice and this permission notice shall be included in all
					copies or substantial portions of the Software.

					THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
					IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
					FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
					AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
					LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
					OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
					SOFTWARE.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='ReactUseWebSocket'>
				No License. Credits go to Robert Taussig (https://github.com/robtaussig).
			</Accordion>
			</div>
			<div>
				<h2>Backend</h2>
				<Accordion className='m-3 card bg-light' title='flask'>
					Copyright 2010 Pallets

					Redistribution and use in source and binary forms, with or without
					modification, are permitted provided that the following conditions are
					met:

					1.  Redistributions of source code must retain the above copyright
						notice, this list of conditions and the following disclaimer.

					2.  Redistributions in binary form must reproduce the above copyright
						notice, this list of conditions and the following disclaimer in the
						documentation and/or other materials provided with the distribution.

					3.  Neither the name of the copyright holder nor the names of its
						contributors may be used to endorse or promote products derived from
						this software without specific prior written permission.

					THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
					"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
					LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
					PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
					HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
					SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
					TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
					PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
					LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
					NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
					SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='flask-restful'>
					Copyright (c) 2013, Twilio, Inc.
					All rights reserved.

					Redistribution and use in source and binary forms, with or without
					modification, are permitted provided that the following conditions are met:

					- Redistributions of source code must retain the above copyright notice, this
					list of conditions and the following disclaimer.
					- Redistributions in binary form must reproduce the above copyright notice,
					this list of conditions and the following disclaimer in the documentation
					and/or other materials provided with the distribution.
					- Neither the name of the Twilio, Inc. nor the names of its contributors may be
					used to endorse or promote products derived from this software without
					specific prior written permission.

					THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
					ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
					WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
					DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
					FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
					DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
					SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
					CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
					OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
					OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='PyMongo'>
									Apache License
								Version 2.0, January 2004
							http://www.apache.org/licenses/

					TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

					1. Definitions.

						"License" shall mean the terms and conditions for use, reproduction,
						and distribution as defined by Sections 1 through 9 of this document.

						"Licensor" shall mean the copyright owner or entity authorized by
						the copyright owner that is granting the License.

						"Legal Entity" shall mean the union of the acting entity and all
						other entities that control, are controlled by, or are under common
						control with that entity. For the purposes of this definition,
						"control" means (i) the power, direct or indirect, to cause the
						direction or management of such entity, whether by contract or
						otherwise, or (ii) ownership of fifty percent (50%) or more of the
						outstanding shares, or (iii) beneficial ownership of such entity.

						"You" (or "Your") shall mean an individual or Legal Entity
						exercising permissions granted by this License.

						"Source" form shall mean the preferred form for making modifications,
						including but not limited to software source code, documentation
						source, and configuration files.

						"Object" form shall mean any form resulting from mechanical
						transformation or translation of a Source form, including but
						not limited to compiled object code, generated documentation,
						and conversions to other media types.

						"Work" shall mean the work of authorship, whether in Source or
						Object form, made available under the License, as indicated by a
						copyright notice that is included in or attached to the work
						(an example is provided in the Appendix below).

						"Derivative Works" shall mean any work, whether in Source or Object
						form, that is based on (or derived from) the Work and for which the
						editorial revisions, annotations, elaborations, or other modifications
						represent, as a whole, an original work of authorship. For the purposes
						of this License, Derivative Works shall not include works that remain
						separable from, or merely link (or bind by name) to the interfaces of,
						the Work and Derivative Works thereof.

						"Contribution" shall mean any work of authorship, including
						the original version of the Work and any modifications or additions
						to that Work or Derivative Works thereof, that is intentionally
						submitted to Licensor for inclusion in the Work by the copyright owner
						or by an individual or Legal Entity authorized to submit on behalf of
						the copyright owner. For the purposes of this definition, "submitted"
						means any form of electronic, verbal, or written communication sent
						to the Licensor or its representatives, including but not limited to
						communication on electronic mailing lists, source code control systems,
						and issue tracking systems that are managed by, or on behalf of, the
						Licensor for the purpose of discussing and improving the Work, but
						excluding communication that is conspicuously marked or otherwise
						designated in writing by the copyright owner as "Not a Contribution."

						"Contributor" shall mean Licensor and any individual or Legal Entity
						on behalf of whom a Contribution has been received by Licensor and
						subsequently incorporated within the Work.

					2. Grant of Copyright License. Subject to the terms and conditions of
						this License, each Contributor hereby grants to You a perpetual,
						worldwide, non-exclusive, no-charge, royalty-free, irrevocable
						copyright license to reproduce, prepare Derivative Works of,
						publicly display, publicly perform, sublicense, and distribute the
						Work and such Derivative Works in Source or Object form.

					3. Grant of Patent License. Subject to the terms and conditions of
						this License, each Contributor hereby grants to You a perpetual,
						worldwide, non-exclusive, no-charge, royalty-free, irrevocable
						(except as stated in this section) patent license to make, have made,
						use, offer to sell, sell, import, and otherwise transfer the Work,
						where such license applies only to those patent claims licensable
						by such Contributor that are necessarily infringed by their
						Contribution(s) alone or by combination of their Contribution(s)
						with the Work to which such Contribution(s) was submitted. If You
						institute patent litigation against any entity (including a
						cross-claim or counterclaim in a lawsuit) alleging that the Work
						or a Contribution incorporated within the Work constitutes direct
						or contributory patent infringement, then any patent licenses
						granted to You under this License for that Work shall terminate
						as of the date such litigation is filed.

					4. Redistribution. You may reproduce and distribute copies of the
						Work or Derivative Works thereof in any medium, with or without
						modifications, and in Source or Object form, provided that You
						meet the following conditions:

						(a) You must give any other recipients of the Work or
							Derivative Works a copy of this License; and

						(b) You must cause any modified files to carry prominent notices
							stating that You changed the files; and

						(c) You must retain, in the Source form of any Derivative Works
							that You distribute, all copyright, patent, trademark, and
							attribution notices from the Source form of the Work,
							excluding those notices that do not pertain to any part of
							the Derivative Works; and

						(d) If the Work includes a "NOTICE" text file as part of its
							distribution, then any Derivative Works that You distribute must
							include a readable copy of the attribution notices contained
							within such NOTICE file, excluding those notices that do not
							pertain to any part of the Derivative Works, in at least one
							of the following places: within a NOTICE text file distributed
							as part of the Derivative Works; within the Source form or
							documentation, if provided along with the Derivative Works; or,
							within a display generated by the Derivative Works, if and
							wherever such third-party notices normally appear. The contents
							of the NOTICE file are for informational purposes only and
							do not modify the License. You may add Your own attribution
							notices within Derivative Works that You distribute, alongside
							or as an addendum to the NOTICE text from the Work, provided
							that such additional attribution notices cannot be construed
							as modifying the License.

						You may add Your own copyright statement to Your modifications and
						may provide additional or different license terms and conditions
						for use, reproduction, or distribution of Your modifications, or
						for any such Derivative Works as a whole, provided Your use,
						reproduction, and distribution of the Work otherwise complies with
						the conditions stated in this License.

					5. Submission of Contributions. Unless You explicitly state otherwise,
						any Contribution intentionally submitted for inclusion in the Work
						by You to the Licensor shall be under the terms and conditions of
						this License, without any additional terms or conditions.
						Notwithstanding the above, nothing herein shall supersede or modify
						the terms of any separate license agreement you may have executed
						with Licensor regarding such Contributions.

					6. Trademarks. This License does not grant permission to use the trade
						names, trademarks, service marks, or product names of the Licensor,
						except as required for reasonable and customary use in describing the
						origin of the Work and reproducing the content of the NOTICE file.

					7. Disclaimer of Warranty. Unless required by applicable law or
						agreed to in writing, Licensor provides the Work (and each
						Contributor provides its Contributions) on an "AS IS" BASIS,
						WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
						implied, including, without limitation, any warranties or conditions
						of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
						PARTICULAR PURPOSE. You are solely responsible for determining the
						appropriateness of using or redistributing the Work and assume any
						risks associated with Your exercise of permissions under this License.

					8. Limitation of Liability. In no event and under no legal theory,
						whether in tort (including negligence), contract, or otherwise,
						unless required by applicable law (such as deliberate and grossly
						negligent acts) or agreed to in writing, shall any Contributor be
						liable to You for damages, including any direct, indirect, special,
						incidental, or consequential damages of any character arising as a
						result of this License or out of the use or inability to use the
						Work (including but not limited to damages for loss of goodwill,
						work stoppage, computer failure or malfunction, or any and all
						other commercial damages or losses), even if such Contributor
						has been advised of the possibility of such damages.

					9. Accepting Warranty or Additional Liability. While redistributing
						the Work or Derivative Works thereof, You may choose to offer,
						and charge a fee for, acceptance of support, warranty, indemnity,
						or other liability obligations and/or rights consistent with this
						License. However, in accepting such obligations, You may act only
						on Your own behalf and on Your sole responsibility, not on behalf
						of any other Contributor, and only if You agree to indemnify,
						defend, and hold each Contributor harmless for any liability
						incurred by, or claims asserted against, such Contributor by reason
						of your accepting any such warranty or additional liability.

					END OF TERMS AND CONDITIONS

					APPENDIX: How to apply the Apache License to your work.

						To apply the Apache License to your work, attach the following
						boilerplate notice, with the fields enclosed by brackets "[]"
						replaced with your own identifying information. (Don't include
						the brackets!)  The text should be enclosed in the appropriate
						comment syntax for the file format. We also recommend that a
						file or class name and description of purpose be included on the
						same "printed page" as the copyright notice for easier
						identification within third-party archives.

					Copyright [yyyy] [name of copyright owner]

					Licensed under the Apache License, Version 2.0 (the "License");
					you may not use this file except in compliance with the License.
					You may obtain a copy of the License at

						http://www.apache.org/licenses/LICENSE-2.0

					Unless required by applicable law or agreed to in writing, software
					distributed under the License is distributed on an "AS IS" BASIS,
					WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
					See the License for the specific language governing permissions and
					limitations under the License.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='dnspython'>
					ISC License

					Copyright (C) Dnspython Contributors

					Permission to use, copy, modify, and/or distribute this software for
					any purpose with or without fee is hereby granted, provided that the
					above copyright notice and this permission notice appear in all
					copies.

					THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL
					WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
					WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
					AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL
					DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR
					PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
					TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
					PERFORMANCE OF THIS SOFTWARE.



					Copyright (C) 2001-2017 Nominum, Inc.
					Copyright (C) Google Inc.

					Permission to use, copy, modify, and distribute this software and its
					documentation for any purpose with or without fee is hereby granted,
					provided that the above copyright notice and this permission notice
					appear in all copies.

					THE SOFTWARE IS PROVIDED "AS IS" AND NOMINUM DISCLAIMS ALL WARRANTIES
					WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
					MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL NOMINUM BE LIABLE FOR
					ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
					WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
					ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT
					OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='flask_cors'>
					Copyright (C) 2016 Cory Dolphin, Olin College

					Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

					The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

					THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='python-dotenv'>
					python-dotenv
					Copyright (c) 2014, Saurabh Kumar

					All rights reserved.

					Redistribution and use in source and binary forms, with or without modification,
					are permitted provided that the following conditions are met:

						* Redistributions of source code must retain the above copyright notice,
						this list of conditions and the following disclaimer.
						* Redistributions in binary form must reproduce the above copyright notice,
						this list of conditions and the following disclaimer in the documentation
						and/or other materials provided with the distribution.
						* Neither the name of python-dotenv nor the names of its contributors
						may be used to endorse or promote products derived from this software
						without specific prior written permission.

					THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
					"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
					LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
					A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
					CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
					EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
					PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
					PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
					LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
					NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
					SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


					django-dotenv-rw
					Copyright (c) 2013, Ted Tieken

					All rights reserved.

					Redistribution and use in source and binary forms, with or without modification,
					are permitted provided that the following conditions are met:

						* Redistributions of source code must retain the above copyright notice,
						this list of conditions and the following disclaimer.
						* Redistributions in binary form must reproduce the above copyright notice,
						this list of conditions and the following disclaimer in the documentation
						and/or other materials provided with the distribution.
						* Neither the name of django-dotenv nor the names of its contributors
						may be used to endorse or promote products derived from this software
						without specific prior written permission.

					THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
					"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
					LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
					A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
					CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
					EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
					PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
					PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
					LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
					NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
					SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

					Original django-dotenv
					Copyright (c) 2013, Jacob Kaplan-Moss

					All rights reserved.

					Redistribution and use in source and binary forms, with or without modification,
					are permitted provided that the following conditions are met:

						* Redistributions of source code must retain the above copyright notice,
						this list of conditions and the following disclaimer.
						* Redistributions in binary form must reproduce the above copyright notice,
						this list of conditions and the following disclaimer in the documentation
						and/or other materials provided with the distribution.
						* Neither the name of django-dotenv nor the names of its contributors
						may be used to endorse or promote products derived from this software
						without specific prior written permission.

					THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
					"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
					LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
					A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
					CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
					EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
					PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
					PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
					LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
					NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
					SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='requests'>
										Apache License
									Version 2.0, January 2004
								http://www.apache.org/licenses/

						TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

						1. Definitions.

							"License" shall mean the terms and conditions for use, reproduction,
							and distribution as defined by Sections 1 through 9 of this document.

							"Licensor" shall mean the copyright owner or entity authorized by
							the copyright owner that is granting the License.

							"Legal Entity" shall mean the union of the acting entity and all
							other entities that control, are controlled by, or are under common
							control with that entity. For the purposes of this definition,
							"control" means (i) the power, direct or indirect, to cause the
							direction or management of such entity, whether by contract or
							otherwise, or (ii) ownership of fifty percent (50%) or more of the
							outstanding shares, or (iii) beneficial ownership of such entity.

							"You" (or "Your") shall mean an individual or Legal Entity
							exercising permissions granted by this License.

							"Source" form shall mean the preferred form for making modifications,
							including but not limited to software source code, documentation
							source, and configuration files.

							"Object" form shall mean any form resulting from mechanical
							transformation or translation of a Source form, including but
							not limited to compiled object code, generated documentation,
							and conversions to other media types.

							"Work" shall mean the work of authorship, whether in Source or
							Object form, made available under the License, as indicated by a
							copyright notice that is included in or attached to the work
							(an example is provided in the Appendix below).

							"Derivative Works" shall mean any work, whether in Source or Object
							form, that is based on (or derived from) the Work and for which the
							editorial revisions, annotations, elaborations, or other modifications
							represent, as a whole, an original work of authorship. For the purposes
							of this License, Derivative Works shall not include works that remain
							separable from, or merely link (or bind by name) to the interfaces of,
							the Work and Derivative Works thereof.

							"Contribution" shall mean any work of authorship, including
							the original version of the Work and any modifications or additions
							to that Work or Derivative Works thereof, that is intentionally
							submitted to Licensor for inclusion in the Work by the copyright owner
							or by an individual or Legal Entity authorized to submit on behalf of
							the copyright owner. For the purposes of this definition, "submitted"
							means any form of electronic, verbal, or written communication sent
							to the Licensor or its representatives, including but not limited to
							communication on electronic mailing lists, source code control systems,
							and issue tracking systems that are managed by, or on behalf of, the
							Licensor for the purpose of discussing and improving the Work, but
							excluding communication that is conspicuously marked or otherwise
							designated in writing by the copyright owner as "Not a Contribution."

							"Contributor" shall mean Licensor and any individual or Legal Entity
							on behalf of whom a Contribution has been received by Licensor and
							subsequently incorporated within the Work.

						2. Grant of Copyright License. Subject to the terms and conditions of
							this License, each Contributor hereby grants to You a perpetual,
							worldwide, non-exclusive, no-charge, royalty-free, irrevocable
							copyright license to reproduce, prepare Derivative Works of,
							publicly display, publicly perform, sublicense, and distribute the
							Work and such Derivative Works in Source or Object form.

						3. Grant of Patent License. Subject to the terms and conditions of
							this License, each Contributor hereby grants to You a perpetual,
							worldwide, non-exclusive, no-charge, royalty-free, irrevocable
							(except as stated in this section) patent license to make, have made,
							use, offer to sell, sell, import, and otherwise transfer the Work,
							where such license applies only to those patent claims licensable
							by such Contributor that are necessarily infringed by their
							Contribution(s) alone or by combination of their Contribution(s)
							with the Work to which such Contribution(s) was submitted. If You
							institute patent litigation against any entity (including a
							cross-claim or counterclaim in a lawsuit) alleging that the Work
							or a Contribution incorporated within the Work constitutes direct
							or contributory patent infringement, then any patent licenses
							granted to You under this License for that Work shall terminate
							as of the date such litigation is filed.

						4. Redistribution. You may reproduce and distribute copies of the
							Work or Derivative Works thereof in any medium, with or without
							modifications, and in Source or Object form, provided that You
							meet the following conditions:

							(a) You must give any other recipients of the Work or
								Derivative Works a copy of this License; and

							(b) You must cause any modified files to carry prominent notices
								stating that You changed the files; and

							(c) You must retain, in the Source form of any Derivative Works
								that You distribute, all copyright, patent, trademark, and
								attribution notices from the Source form of the Work,
								excluding those notices that do not pertain to any part of
								the Derivative Works; and

							(d) If the Work includes a "NOTICE" text file as part of its
								distribution, then any Derivative Works that You distribute must
								include a readable copy of the attribution notices contained
								within such NOTICE file, excluding those notices that do not
								pertain to any part of the Derivative Works, in at least one
								of the following places: within a NOTICE text file distributed
								as part of the Derivative Works; within the Source form or
								documentation, if provided along with the Derivative Works; or,
								within a display generated by the Derivative Works, if and
								wherever such third-party notices normally appear. The contents
								of the NOTICE file are for informational purposes only and
								do not modify the License. You may add Your own attribution
								notices within Derivative Works that You distribute, alongside
								or as an addendum to the NOTICE text from the Work, provided
								that such additional attribution notices cannot be construed
								as modifying the License.

							You may add Your own copyright statement to Your modifications and
							may provide additional or different license terms and conditions
							for use, reproduction, or distribution of Your modifications, or
							for any such Derivative Works as a whole, provided Your use,
							reproduction, and distribution of the Work otherwise complies with
							the conditions stated in this License.

						5. Submission of Contributions. Unless You explicitly state otherwise,
							any Contribution intentionally submitted for inclusion in the Work
							by You to the Licensor shall be under the terms and conditions of
							this License, without any additional terms or conditions.
							Notwithstanding the above, nothing herein shall supersede or modify
							the terms of any separate license agreement you may have executed
							with Licensor regarding such Contributions.

						6. Trademarks. This License does not grant permission to use the trade
							names, trademarks, service marks, or product names of the Licensor,
							except as required for reasonable and customary use in describing the
							origin of the Work and reproducing the content of the NOTICE file.

						7. Disclaimer of Warranty. Unless required by applicable law or
							agreed to in writing, Licensor provides the Work (and each
							Contributor provides its Contributions) on an "AS IS" BASIS,
							WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
							implied, including, without limitation, any warranties or conditions
							of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
							PARTICULAR PURPOSE. You are solely responsible for determining the
							appropriateness of using or redistributing the Work and assume any
							risks associated with Your exercise of permissions under this License.

						8. Limitation of Liability. In no event and under no legal theory,
							whether in tort (including negligence), contract, or otherwise,
							unless required by applicable law (such as deliberate and grossly
							negligent acts) or agreed to in writing, shall any Contributor be
							liable to You for damages, including any direct, indirect, special,
							incidental, or consequential damages of any character arising as a
							result of this License or out of the use or inability to use the
							Work (including but not limited to damages for loss of goodwill,
							work stoppage, computer failure or malfunction, or any and all
							other commercial damages or losses), even if such Contributor
							has been advised of the possibility of such damages.

						9. Accepting Warranty or Additional Liability. While redistributing
							the Work or Derivative Works thereof, You may choose to offer,
							and charge a fee for, acceptance of support, warranty, indemnity,
							or other liability obligations and/or rights consistent with this
							License. However, in accepting such obligations, You may act only
							on Your own behalf and on Your sole responsibility, not on behalf
							of any other Contributor, and only if You agree to indemnify,
							defend, and hold each Contributor harmless for any liability
							incurred by, or claims asserted against, such Contributor by reason
							of your accepting any such warranty or additional liability.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='bs4'>
					Beautiful Soup is licensed under the MIT license, so you can also download the tarball, drop the bs4/ directory into almost any Python application (or into your library path) and start using it immediately. (If you want to do this under Python 3, you will need to manually convert the code using 2to3.)
				</Accordion>
				<Accordion className='m-3 card bg-light' title='websockets'>
					Copyright (c) 2013-2021 Aymeric Augustin and contributors.
					All rights reserved.

					Redistribution and use in source and binary forms, with or without
					modification, are permitted provided that the following conditions are met:

						* Redistributions of source code must retain the above copyright notice,
						this list of conditions and the following disclaimer.
						* Redistributions in binary form must reproduce the above copyright notice,
						this list of conditions and the following disclaimer in the documentation
						and/or other materials provided with the distribution.
						* Neither the name of websockets nor the names of its contributors may
						be used to endorse or promote products derived from this software without
						specific prior written permission.

					THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
					ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
					WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
					DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
					FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
					DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
					SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
					CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
					OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
					OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
				</Accordion>
				<Accordion className='m-3 card bg-light' title='azure-storage-blob'>
					The MIT License (MIT)

					Copyright (c) 2015 Microsoft

					Permission is hereby granted, free of charge, to any person obtaining a copy
					of this software and associated documentation files (the "Software"), to deal
					in the Software without restriction, including without limitation the rights
					to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
					copies of the Software, and to permit persons to whom the Software is
					furnished to do so, subject to the following conditions:

					The above copyright notice and this permission notice shall be included in all
					copies or substantial portions of the Software.

					THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
					IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
					FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
					AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
					LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
					OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
					SOFTWARE.
				</Accordion>
			</div>
		</div>
	);
}

export default Licenses;