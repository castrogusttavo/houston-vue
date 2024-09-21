
<template>
  <Icon :iconName="'inbox-check'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InboxCheckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'inbox-check'
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
