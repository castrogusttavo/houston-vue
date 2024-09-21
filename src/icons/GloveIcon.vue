
<template>
  <Icon :iconName="'glove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GloveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'glove'
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
