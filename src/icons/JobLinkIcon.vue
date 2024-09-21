
<template>
  <Icon :iconName="'job-link'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JobLinkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'job-link'
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
