
<template>
  <Icon :iconName="'location-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Location07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-07'
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
