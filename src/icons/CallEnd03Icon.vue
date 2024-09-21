
<template>
  <Icon :iconName="'call-end-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallEnd03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-end-03'
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
