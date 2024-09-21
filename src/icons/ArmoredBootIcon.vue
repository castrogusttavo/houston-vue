
<template>
  <Icon :iconName="'armored-boot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArmoredBootIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'armored-boot'
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
