
<template>
  <Icon :iconName="'contact-book'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ContactBookIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'contact-book'
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
