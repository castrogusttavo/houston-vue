
<template>
  <Icon :iconName="'alphabet-arabic'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlphabetArabicIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alphabet-arabic'
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
