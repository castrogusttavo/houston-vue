
<template>
  <Icon :iconName="'xing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'XingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'xing'
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
