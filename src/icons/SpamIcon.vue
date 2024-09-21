
<template>
  <Icon :iconName="'spam'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpamIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'spam'
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
