
<template>
  <Icon :iconName="'user-love-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserLove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-love-01'
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
