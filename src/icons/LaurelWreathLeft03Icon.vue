
<template>
  <Icon :iconName="'laurel-wreath-left-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaurelWreathLeft03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laurel-wreath-left-03'
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
