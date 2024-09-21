
<template>
  <Icon :iconName="'message-blocked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageBlockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-blocked'
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
