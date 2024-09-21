
<template>
  <Icon :iconName="'alphabet-thai'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlphabetThaiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alphabet-thai'
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
