
<template>
  <Icon :iconName="'user-star-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserStar01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-star-01'
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
