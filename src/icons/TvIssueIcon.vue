
<template>
  <Icon :iconName="'tv-issue'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TvIssueIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tv-issue'
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
