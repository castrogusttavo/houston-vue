
<template>
  <Icon :iconName="'arrow-left-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowLeftDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-left-double'
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
