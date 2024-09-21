
<template>
  <Icon :iconName="'thread'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThreadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'thread'
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
