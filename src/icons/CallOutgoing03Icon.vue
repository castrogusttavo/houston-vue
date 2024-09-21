
<template>
  <Icon :iconName="'call-outgoing-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallOutgoing03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-outgoing-03'
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
