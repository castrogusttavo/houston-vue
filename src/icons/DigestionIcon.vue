
<template>
  <Icon :iconName="'digestion'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DigestionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'digestion'
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
