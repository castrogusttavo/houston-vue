
<template>
  <Icon :iconName="'modern-tv-issue'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ModernTvIssueIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'modern-tv-issue'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
