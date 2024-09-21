
<template>
  <Icon :iconName="'auto-conversations'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AutoConversationsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'auto-conversations'
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
