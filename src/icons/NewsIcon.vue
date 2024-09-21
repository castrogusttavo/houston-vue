
<template>
  <Icon :iconName="'news'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NewsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'news'
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
