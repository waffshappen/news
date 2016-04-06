OC.L10N.register(
    "news",
    {
    "Feed contains invalid XML" : "피드에 올바르지 않은 XML이 포함되어 있음",
    "Feed not found: either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl http://the-feed.tld" : "피드를 찾을 수 없습니다. 웹 사이트에서 피드를 제공하지 않거나 접근을 차단하고 있습니다. 차단 여부를 확인하려면 서버의 명령줄에서 curl 명령을 사용하여 피드를 다운로드해 보십시오: curl http://the-feed.tld",
    "Detected feed format is not supported" : "감지한 피드 포맷을 지원하지 않음",
    "SSL Certificate is invalid" : "SSL 인증서가 잘못됨",
    "Website not found" : "웹 사이트를 찾을 수 없음",
    "More redirects than allowed, aborting" : "허용된 것보다 더 많은 넘겨주기 요청이 들어옴, 중단함",
    "Bigger than maximum allowed size" : "최대 허용 크기보다 큼",
    "Request timed out" : "요청 시간 초과됨",
    "Request failed, network connection unavailable!" : "요청을 실패했습니다. 네트워크 연결을 사용할 수 없습니다.",
    "Request unauthorized. Are you logged in?" : "요청이 인증되지 않았습니다. 로그인 되어 있습니까?",
    "Request forbidden. Are you an admin?" : "요청이 금지되었습니다. 관리자 권한을 갖고 있습니까?",
    "Token expired or app not enabled! Reload the page!" : "토큰이 만료되었거나 앱이 활성화되어 있지 않습니다. 페이지를 새로 고치십시오.",
    "Internal server error! Please check your data/owncloud.log file for additional information!" : "내부 서버 오류입니다. 추가 정보를 보려면 data/owncloud.log 파일을 확인하십시오.",
    "Request failed, ownCloud is in currently in maintenance mode!" : "요청을 실패하였습니다. ownCloud가 현재 유지 보수 모드로 동작 중입니다.",
    "Can not add feed: Exists already" : "피드를 추가할 수 없음: 이미 존재함",
    "Articles without feed" : "피드가 없는 글",
    "Can not add folder: Exists already" : "폴더를 추가할 수 없음: 이미 존재함",
    "Use ownCloud cron for updates" : "ownCloud cron으로 업데이트",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "앱에 포함된 파이썬 업데이터 등 외부 업데이터를 사용하면 비활성화하십시오.",
    "Purge interval" : "비우기 주기",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "삭제된 피드와 폴더를 데이터베이스에서 삭제할 초 단위의 시간을 입력하십시오. 60 이하의 값은 무시됩니다.",
    "Maximum read count per feed" : "피드당 최대 읽은 글 개수",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off completely" : "비우기 작업 실행 후에도 남겨 둘 피드당 최대 글 개수를 지정하십시오. 오래 전에 읽었던 글이 다시 나타나면 이 값을 증가시키십시오. -1와 같은 음수를 입력하면 이 기능을 비활성화합니다",
    "Maximum redirects" : "최대 넘겨주기 수",
    "How many redirects the feed fetcher should follow" : "피드를 가져올 때 따라갈 최대 넘겨주기 수",
    "Maximum feed page size" : "최대 피드 페이지 크기",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "바이트 단위의 최대 피드 크기입니다. RSS/Atom 페이지가 이 크기보다 크면 업데이트 작업을 중단합니다",
    "Feed fetcher timeout" : "피드 가져오기 시간 제한",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "RSS/Atom 피드를 가져올 때 기다릴 최대 시간입니다. 작업이 이 시간보다 더 오래 걸리면 중지됩니다",
    "Explore Service URL" : "탐색 서비스 URL",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "여기에 URL을 입력하면 피드 탐색 목록에 표시할 피드를 이 URL에서 가져옵니다. 내장 탐색 서비스를 사용하려면 이 항목을 비워 두십시오",
    "Saved" : "저장됨",
    "Download" : "다운로드",
    "Close" : "닫기",
    "Ajax or webcron cron mode detected! Your feeds will not be updated correctly. It is recommended to either use the operating system cron or a custom updater." : "Ajax 및 webcron cron 모드가 감지되었습니다! 피드가 올바르게 업데이트되지 않을 수도 있습니다. 시스템 cron을 사용하거나 사용자 정의 업데이터를 사용하는 것을 추천합니다.",
    "How to set up the operating system cron" : "운영 체제 cron 설정 방법",
    "How to set up a custom updater (faster and no possible deadlock) " : "사용자 정의 업데이터 설정 방법(더 빠르고 데드록을 줄일 수 있음)",
    "Language" : "언어",
    "Subscribe" : "구독",
    "Refresh" : "새로 고침",
    "No articles available" : "글 없음",
    "No unread articles available" : "읽지 않은 글 없음",
    "Open website" : "웹 사이트 열기",
    "Star article" : "글에 별표 붙이기",
    "Unstar article" : "글에서 별표 떼기",
    "Keep article unread" : "읽지 않은 상태로 유지",
    "Remove keep article unread" : "읽지 않은 상태로 유지하지 않음",
    "by" : "작성:",
    "from" : "원본 사이트:",
    "Play audio" : "오디오 재생",
    "Download video" : "동영상 다운로드",
    "Download audio" : "오디오 다운로드",
    "Keyboard shortcut" : "키보드 단축키",
    "Description" : "설명",
    "right" : "오른쪽",
    "Jump to next article" : "다음 글로 이동",
    "left" : "왼쪽",
    "Jump to previous article" : "이전 글로 이동",
    "Toggle star article" : "글 별표 전환",
    "Star article and jump to next one" : "글에 별표를 붙이고 다음 항목으로 이동",
    "Toggle keep current article unread" : "현재 글 읽지 않은 상태로 유지 전환",
    "Open article in new tab" : "새 탭으로 글 열기",
    "Toggle expand article in compact view" : "작은 보기에서 글 확장 전환",
    "Load next feed" : "다음 피드 불러오기",
    "Load previous feed" : "이전 피드 불러오기",
    "Load next folder" : "다음 폴더 불러오기",
    "Load previous folder" : "이전 폴더 불러오기",
    "Scroll to active navigation entry" : "활성 탐색 항목으로 스크롤",
    "Focus search field" : "검색 필드에 초점 맞추기",
    "Mark current article's feed/folder read" : "현재 글이 속한 피드/폴더를 읽은 것으로 표시",
    "Web address" : "웹 주소",
    "Feed exists already!" : "피드가 이미 존재합니다!",
    "Folder" : "폴더",
    "No folder" : "폴더 없음",
    "New folder" : "새 폴더",
    "Folder name" : "폴더 이름",
    "Go back" : "뒤로 가기",
    "Folder exists already!" : "폴더가 이미 존재합니다!",
    "Advanced settings" : "고급 설정",
    "Credentials" : "자격 정보",
    "Username" : "사용자 이름",
    "Password" : "암호",
    "New Folder" : "새 폴더",
    "Create" : "만들기",
    "Explore" : "탐색",
    "Deleted feed" : "삭제된 피드",
    "Undo delete feed" : "피드 삭제 취소",
    "Rename" : "이름 바꾸기",
    "Menu" : "메뉴",
    "Unpin feed from the top" : "피드를 위쪽에서 고정 해제",
    "Pin feed to the top" : "피드를 위쪽에 고정",
    "No feed ordering" : "피드 정렬 없음",
    "Reversed feed ordering" : "피드 역순 정렬",
    "Normal feed ordering" : "피드 일반 정렬",
    "Enable full text feed fetching" : "피드 전문 가져오기 사용",
    "Disable full text feed fetching" : "피드 전문 가져오기 사용 안 함",
    "Keep updated articles as is" : "업데이트된 글을 그대로 유지",
    "Mark updated articles unread" : "업데이트된 글을 읽지 않은 것으로 표시",
    "Rename feed" : "피드 이름 바꾸기",
    "Delete feed" : "피드 삭제",
    "Mark all articles read" : "모두 읽은 것으로 표시",
    "Dismiss" : "닫기",
    "Collapse" : "접기",
    "Deleted folder" : "삭제된 폴더",
    "Undo delete folder" : "폴더 삭제 실행 취소",
    "Rename folder" : "폴더 이름 바꾸기",
    "Delete folder" : "폴더 삭제",
    "Starred" : "별표",
    "Unread articles" : "읽지 않은 글",
    "All articles" : "모든 글",
    "Settings" : "설정",
    "Keyboard shortcuts" : "키보드 단축키",
    "Disable mark read through scrolling" : "스크롤 시 읽은 상태로 표시 비활성화",
    "Compact view" : "축소된 보기",
    "Expand articles on key navigation" : "키 탐색 시 글 확장",
    "Show all articles" : "모든 글 보기",
    "Reverse ordering (oldest on top)" : "순서 뒤집기(오래된 항목 먼저)",
    "Subscriptions (OPML)" : "구독(OPML)",
    "Import" : "가져오기",
    "Export" : "내보내기",
    "Error when importing: file does not contain valid OPML" : "가져오기 오류: 파일이 올바른 OPML을 포함하지 않음",
    "Unread/Starred Articles" : "읽지 않은/별표한 글",
    "Error when importing: file does not contain valid JSON" : "가져오기 오류: 파일이 올바른 JSON을 포함하지 않음"
},
"nplurals=1; plural=0;");
