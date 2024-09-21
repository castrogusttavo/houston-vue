
<template>
  <Icon :iconName="'alphabet-hindi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlphabetHindiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alphabet-hindi'
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
