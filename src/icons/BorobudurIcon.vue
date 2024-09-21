
<template>
  <Icon :iconName="'borobudur'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorobudurIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'borobudur'
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
