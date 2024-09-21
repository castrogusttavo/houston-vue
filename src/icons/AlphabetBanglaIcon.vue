
<template>
  <Icon :iconName="'alphabet-bangla'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlphabetBanglaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alphabet-bangla'
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
