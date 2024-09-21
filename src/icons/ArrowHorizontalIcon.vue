
<template>
  <Icon :iconName="'arrow-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-horizontal'
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
