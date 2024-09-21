
<template>
  <Icon :iconName="'boxing-glove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BoxingGloveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'boxing-glove'
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
