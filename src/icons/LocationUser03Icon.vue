
<template>
  <Icon :iconName="'location-user-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationUser03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-user-03'
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
