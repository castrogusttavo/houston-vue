
<template>
  <Icon :iconName="'mushroom'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MushroomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mushroom'
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
