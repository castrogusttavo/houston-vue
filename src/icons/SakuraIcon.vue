
<template>
  <Icon :iconName="'sakura'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SakuraIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sakura'
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
