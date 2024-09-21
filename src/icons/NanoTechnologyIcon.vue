
<template>
  <Icon :iconName="'nano-technology'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NanoTechnologyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'nano-technology'
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
