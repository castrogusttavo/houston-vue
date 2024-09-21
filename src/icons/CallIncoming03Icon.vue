
<template>
  <Icon :iconName="'call-incoming-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallIncoming03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-incoming-03'
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
