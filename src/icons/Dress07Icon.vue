
<template>
  <Icon :iconName="'dress-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dress07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dress-07'
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
