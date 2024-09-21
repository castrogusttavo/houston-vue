
<template>
  <Icon :iconName="'arrow-right-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowRightDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-right-double'
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
