
<template>
  <Icon :iconName="'transparency'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TransparencyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'transparency'
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
