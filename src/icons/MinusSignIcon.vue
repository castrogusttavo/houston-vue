
<template>
  <Icon :iconName="'minus-sign'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MinusSignIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'minus-sign'
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
