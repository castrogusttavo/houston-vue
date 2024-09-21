
<template>
  <Icon :iconName="'important-book'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImportantBookIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'important-book'
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
