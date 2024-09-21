
<template>
  <Icon :iconName="'call-outgoing-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallOutgoing04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-outgoing-04'
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
