
<template>
  <Icon :iconName="'croissant'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CroissantIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'croissant'
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
