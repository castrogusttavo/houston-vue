
<template>
  <Icon :iconName="'alphabet-chinese'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlphabetChineseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alphabet-chinese'
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
